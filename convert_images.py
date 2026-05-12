import os
from PIL import Image

def convert_images(directory):
    extensions = ('.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG')
    for filename in os.listdir(directory):
        if filename.lower().endswith(extensions):
            file_path = os.path.join(directory, filename)
            try:
                with Image.open(file_path) as img:
                    # Convert to RGB if necessary (e.g. for PNG with transparency if saving to format that doesn't support it, but webp does)
                    # For WebP, transparency is supported.
                    new_filename = os.path.splitext(filename)[0] + '.webp'
                    new_path = os.path.join(directory, new_filename)
                    img.save(new_path, 'webp')
                    print(f"Converted: {filename} -> {new_filename}")
                
                # Delete original
                os.remove(file_path)
                print(f"Deleted original: {filename}")
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")

if __name__ == "__main__":
    assets_dir = os.path.join('src', 'assets')
    if os.path.exists(assets_dir):
        convert_images(assets_dir)
    else:
        print(f"Directory {assets_dir} not found.")
