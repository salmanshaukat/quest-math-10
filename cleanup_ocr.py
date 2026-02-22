"""
Automated OCR cleanup for common math text patterns.
Fixes known Tesseract OCR errors in math content.
"""

import re
import os
import glob

OCR_DIR = r'C:\Users\Asus\Downloads\math_10th\ocr_output'
CLEAN_DIR = r'C:\Users\Asus\Downloads\math_10th\ocr_cleaned'

os.makedirs(CLEAN_DIR, exist_ok=True)

def clean_math_ocr(text):
    """Apply regex-based cleanup rules for math OCR text."""

    # Remove common OCR noise from decorative borders
    # Lines that are just symbols/pipes with no meaningful content
    text = re.sub(r'^[\|\}\{\[\]\s\-\*\.~><#]+$', '', text, flags=re.MULTILINE)

    # Fix superscript 2 (x? -> x², i? -> i²)
    # Common pattern: letter followed by ? where it should be ²
    text = re.sub(r'\bi\?', 'i²', text)
    text = re.sub(r'x\?\s', 'x² ', text)
    text = re.sub(r'x\?\+', 'x²+', text)
    text = re.sub(r'x\?\-', 'x²-', text)
    text = re.sub(r'x\?\.', 'x².', text)
    text = re.sub(r'x\?\)', 'x²)', text)
    text = re.sub(r'x\?\,', 'x²,', text)
    text = re.sub(r'x\?=', 'x²=', text)
    text = re.sub(r'y\?\s', 'y² ', text)
    text = re.sub(r'y\?\+', 'y²+', text)
    text = re.sub(r'y\?\-', 'y²-', text)
    text = re.sub(r'z\?\s', 'z² ', text)
    text = re.sub(r'r\?\s', 'r² ', text)
    text = re.sub(r'a\?\s', 'a² ', text)
    text = re.sub(r'b\?\s', 'b² ', text)
    text = re.sub(r'n\?\s', 'n² ', text)

    # Fix square root symbols
    text = re.sub(r'V-(\d)', r'√-\1', text)
    text = re.sub(r'V(\d)', r'√\1', text)
    text = re.sub(r'¥-(\d)', r'√-\1', text)
    text = re.sub(r'¥(\d)', r'√\1', text)
    text = re.sub(r'Vx\b', '√x', text)

    # Fix common math symbols
    text = text.replace('—1)', '−1)')  # em-dash to minus
    text = text.replace('—1.', '−1.')
    text = text.replace('—1 ', '−1 ')
    text = text.replace('—2)', '−2)')
    text = text.replace('—2 ', '−2 ')

    # Fix multiplication dot
    text = text.replace(' x ', ' × ')  # Be careful - only in math context

    # Fix common garbled words
    text = text.replace('littlke', 'little')
    text = text.replace('anzlyze', 'analyze')

    # Fix theta, alpha, beta symbols often garbled
    text = re.sub(r'\b0\s*=\s*(\d+)°', r'θ = \1°', text)

    # Clean up excessive blank lines (more than 2 consecutive)
    text = re.sub(r'\n{4,}', '\n\n\n', text)

    # Clean up lines that are just pipes or decorative elements
    text = re.sub(r'^\s*\|\s*$', '', text, flags=re.MULTILINE)
    text = re.sub(r'^\s*[eo]+\s+me\s+[\|\.].*$', '', text, flags=re.MULTILINE)

    # Fix "ax? +bx+c" -> "ax² +bx+c" pattern
    text = re.sub(r'(\d?)([a-z])\?\s*([+\-])', r'\1\2² \3', text)
    text = re.sub(r'(\d?)([a-z])\?([=\)])', r'\1\2²\3', text)

    # Fix common fraction display
    text = text.replace('1/2', '½')
    text = text.replace('1/4', '¼')
    text = text.replace('3/4', '¾')

    # Clean up "studyplusplus" watermark remnants
    text = re.sub(r'studyplusplus\.com\s*\(study\+\+\)', '', text, flags=re.IGNORECASE)

    return text.strip()

def process_files():
    """Process all OCR text files and save cleaned versions."""
    txt_files = sorted(glob.glob(os.path.join(OCR_DIR, '*.txt')))

    for filepath in txt_files:
        filename = os.path.basename(filepath)
        if filename == 'COMPLETE_RAW_OCR.txt':
            continue  # Skip the complete dump, we'll regenerate it

        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        cleaned = clean_math_ocr(content)

        out_path = os.path.join(CLEAN_DIR, filename)
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(cleaned)

        orig_len = len(content)
        clean_len = len(cleaned)
        reduction = ((orig_len - clean_len) / orig_len * 100) if orig_len > 0 else 0
        print(f'{filename}: {orig_len:,} -> {clean_len:,} chars ({reduction:.1f}% reduced)')

    # Generate combined cleaned file
    all_cleaned = []
    for filepath in sorted(glob.glob(os.path.join(CLEAN_DIR, '*.txt'))):
        if os.path.basename(filepath) != 'COMPLETE_CLEANED_OCR.txt':
            with open(filepath, 'r', encoding='utf-8') as f:
                all_cleaned.append(f.read())

    combined_path = os.path.join(CLEAN_DIR, 'COMPLETE_CLEANED_OCR.txt')
    with open(combined_path, 'w', encoding='utf-8') as f:
        f.write('\n\n'.join(all_cleaned))
    print(f'\nCombined cleaned file: {combined_path}')
    print(f'Total size: {os.path.getsize(combined_path):,} bytes')

if __name__ == '__main__':
    process_files()
