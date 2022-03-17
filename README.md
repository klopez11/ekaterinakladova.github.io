# ekaterinakladova.github.io

start.html is starting page 
default.css is the default styling 
start.js is where global functions are kept

Example of calling a function from start.js:
<script src="js/start.js"></script>  (this should already be in the header of all HTML's)
...
<button onclick="confirmation()">test</button>
This will call the confirmation() function when clicked

Example of calling a local function:
<script>
	function confirmaton() {
		...
	}
</script>
<button onclick="confirmation()">test</button>

If local scripts don't run at runtime, like the one above, please put them after the footer.

Wiewport units (vh and vw) are used for sizes, location, etc. While not optimal for accessbility, it is the best compromise between pixels/ems (4px is 4px, whether on a 200x200 monitor or 20000x20000 monitor), percentages (which usually don't scale well), and manually having to create different layouts based on a sample of screen sizes.
