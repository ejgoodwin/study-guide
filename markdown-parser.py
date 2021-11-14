# Parser to convert .md files into .html files with html tags included to give consistent
# structure and styling.
# Run `python3 markdown-parser.py` to generate html files.
# Change `header` and `footer` if project html structure.

import markdown
import os

markdownTest = '# Hello H1'
html = markdown.markdown(markdownTest)

header = """<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Study Guide</title>
	<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="../style.css">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/themes/prism-okaidia.min.css" rel="stylesheet" />
</head>
<body>
	<section class="container py-5">
		<a href="../index.html">Study guide</a>
 """

footer = """
</section>
<script src="../main.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/plugins/autoloader/prism-autoloader.min.js"></script>
</body>
</html> """

with os.scandir('topics') as entries:
	for entry in entries:
		print(entry.path)
		if entry.path.endswith('.md'):
			with open(entry.path, 'r') as f:
			    fileText = f.read()
			    markdownText = markdown.markdown(fileText)
			    newFileName = entry.path.replace('.md', '') + '.html'
			
			with open(newFileName, 'w', encoding='utf-8', errors='xmlcharrefreplace') as output_file:
				output_file.write(header)
				output_file.write(markdownText)
				output_file.write(footer)
