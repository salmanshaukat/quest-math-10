"""
OCR Extraction Script for 10th Grade Math Textbook
Federal Board / Punjab Textbook Board, Pakistan
"""

import fitz
import pytesseract
from PIL import Image, ImageFilter, ImageEnhance
import io
import os
import time

# Configuration
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
PDF_PATH = r'C:\Users\Asus\Downloads\math_10th\v2-10-maths.pdf'
OUTPUT_DIR = r'C:\Users\Asus\Downloads\math_10th\ocr_output'
DPI = 300

# Chapter structure (page numbers from the book, 1-indexed)
CHAPTERS = [
    {"name": "00_preface_and_intro", "title": "Preface & Introduction", "start": 1, "end": 5},
    {"name": "01_complex_numbers", "title": "Complex Numbers", "start": 6, "end": 26},
    {"name": "02_quadratic_equations", "title": "Quadratic Equations", "start": 27, "end": 54},
    {"name": "03_matrices_and_determinants", "title": "Matrices and Determinants", "start": 55, "end": 77},
    {"name": "04_linear_quadratic_inequalities", "title": "Linear and Quadratic Inequalities", "start": 78, "end": 96},
    {"name": "05_algebraic_fractions", "title": "Algebraic Fractions", "start": 97, "end": 114},
    {"name": "06_functions_and_graphs", "title": "Functions and Graphs", "start": 115, "end": 139},
    {"name": "07_vectors_in_plane", "title": "Vectors in Plane", "start": 140, "end": 159},
    {"name": "08_application_of_trigonometry", "title": "Application of Trigonometry", "start": 160, "end": 195},
    {"name": "09_chord_and_arcs_of_circle", "title": "Chord and Arcs of a Circle", "start": 196, "end": 214},
    {"name": "10_tangents_and_angles_of_circle", "title": "Tangents and Angles of a Circle", "start": 215, "end": 231},
    {"name": "11_practical_geometry_of_circles", "title": "Practical Geometry of Circles", "start": 232, "end": 244},
    {"name": "12_basic_statistics", "title": "Basic Statistics", "start": 245, "end": 278},
    {"name": "13_answers", "title": "Answers", "start": 279, "end": 300},
]

def preprocess_image(img):
    """Preprocess image for better OCR results on scanned math text."""
    # Convert to grayscale
    img = img.convert('L')
    # Increase contrast
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(1.5)
    # Sharpen
    img = img.filter(ImageFilter.SHARPEN)
    return img

def ocr_page(doc, page_num, dpi=300):
    """OCR a single page and return the text."""
    page = doc[page_num]
    mat = fitz.Matrix(dpi/72, dpi/72)
    pix = page.get_pixmap(matrix=mat)
    img = Image.open(io.BytesIO(pix.tobytes('png')))

    # Preprocess for better OCR
    img = preprocess_image(img)

    # OCR with math-friendly config
    custom_config = r'--psm 6 --oem 3'
    text = pytesseract.image_to_string(img, config=custom_config)
    return text

def main():
    print(f"Opening PDF: {PDF_PATH}")
    doc = fitz.open(PDF_PATH)
    total_pages = doc.page_count
    print(f"Total pages: {total_pages}")
    print(f"Output directory: {OUTPUT_DIR}")
    print("=" * 60)

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Also save a complete raw dump
    all_text_lines = []
    start_time = time.time()

    for chapter in CHAPTERS:
        ch_name = chapter["name"]
        ch_title = chapter["title"]
        ch_start = chapter["start"] - 1  # Convert to 0-indexed
        ch_end = min(chapter["end"], total_pages)  # Clamp to actual page count

        print(f"\n--- Processing: {ch_title} (pages {chapter['start']}-{chapter['end']}) ---")

        chapter_text = []
        chapter_text.append(f"{'='*60}")
        chapter_text.append(f"CHAPTER: {ch_title}")
        chapter_text.append(f"Pages: {chapter['start']} - {chapter['end']}")
        chapter_text.append(f"{'='*60}\n")

        for page_idx in range(ch_start, ch_end):
            page_num = page_idx + 1  # 1-indexed for display

            try:
                text = ocr_page(doc, page_idx, DPI)

                page_header = f"\n--- Page {page_num} ---\n"
                chapter_text.append(page_header)
                chapter_text.append(text)

                all_text_lines.append(page_header)
                all_text_lines.append(text)

                # Progress indicator
                elapsed = time.time() - start_time
                pages_done = page_idx + 1
                avg_time = elapsed / pages_done
                remaining = avg_time * (total_pages - pages_done)
                print(f"  Page {page_num}/{total_pages} done | "
                      f"Elapsed: {elapsed:.0f}s | "
                      f"Est. remaining: {remaining:.0f}s | "
                      f"Avg: {avg_time:.1f}s/page")

            except Exception as e:
                error_msg = f"\n[ERROR on page {page_num}: {str(e)}]\n"
                chapter_text.append(error_msg)
                all_text_lines.append(error_msg)
                print(f"  ERROR on page {page_num}: {e}")

        # Save chapter file
        ch_filepath = os.path.join(OUTPUT_DIR, f"{ch_name}.txt")
        with open(ch_filepath, 'w', encoding='utf-8') as f:
            f.write('\n'.join(chapter_text))
        print(f"  Saved: {ch_filepath}")

    # Save complete raw dump
    complete_path = os.path.join(OUTPUT_DIR, "COMPLETE_RAW_OCR.txt")
    with open(complete_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(all_text_lines))
    print(f"\nSaved complete dump: {complete_path}")

    total_time = time.time() - start_time
    print(f"\n{'='*60}")
    print(f"OCR COMPLETE!")
    print(f"Total time: {total_time:.0f} seconds ({total_time/60:.1f} minutes)")
    print(f"Total pages processed: {total_pages}")
    print(f"Average time per page: {total_time/total_pages:.1f} seconds")
    print(f"Output files in: {OUTPUT_DIR}")
    print(f"{'='*60}")

    doc.close()

if __name__ == "__main__":
    main()
