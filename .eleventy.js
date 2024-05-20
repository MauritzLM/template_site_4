

module.exports = function (eleventyConfig) {
	
	// allows assets, CMS files and other root files to be passed into /public. styles are automatically generated by LESS/SASS
	eleventyConfig.addPassthroughCopy('./src/assets');
	eleventyConfig.addPassthroughCopy('./src/admin');
	// eleventyConfig.addPassthroughCopy('./src/_redirects');
	// eleventyConfig.addPassthroughCopy({ './src/robots.txt': '/robots.txt' });
	eleventyConfig.addPassthroughCopy({ './src/sitemap.xml': '/sitemap.xml' });

     // date filter
     eleventyConfig.addFilter("postDate", (dateObj) => {
        return new Date(dateObj).toLocaleDateString('en-gb', {
            year: "numeric", month: "short",
            day: "numeric"
        });
    });

	return {
		dir: {
			input: 'src',
			output: 'public',
			includes: '_includes',
			data: '_data',
		},
		htmlTemplateEngine: 'njk',
	};
};