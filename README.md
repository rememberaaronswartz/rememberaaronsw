# Remember Aaron Swartz

This is the open source content and code for the [Remember Aaron Swartz site](http://www.rememberaaronsw.com/).

## How to Contribute

This site uses the Jekyll blogging engine to manage individual memories. Each memory is an independent file with
metadata specifying its URL and date of posting. The content itself is written in Markdown, which Aaron
contributed feedback to.

The easiest way to add a new memory is to fork the repository and use Github's editing tools to add a new file that
follows a valid template. Validate types of memory are: `image`, `quote` (with a link to relevant article), or `post`
(an original contribution). Feel free to browse the existing examples and use them for inspiration.

If you'd like to clone the repository locally, there is a Rake task to help you out:

`rake new[type,title,author]`

*N.B.* Please hyphenate title and author to create proper permalinks.

| Name   | Description                                        | Default            |
|--------|----------------------------------------------------|--------------------|
| type   | Memory type. Can be one of image, quote, or post.  | post               |
| title  | Title of the memory                                | a-memory           |
| author | Author of the memory                               | family-and-friends |

Once you're done, submit a standard Github pull request. Once the pull request is accepted, the live site 
will be updated with your memory in about 5 minutes.

## Other Uses

Please feel free to use this site as a template for creating other remembrance sites. Like other Jekyll sites, it's 
easy and cheap to run (for example, on Amazon S3, which is what we use.) But any webserver will do.

## Ways to Help

If you would like to help with this site, here are a few things that we haven't been able to get around to:

* Prettyify the newpost form, an attempt to automate the submission process.
* Make the newpost form a self submission form using Github oauth.

## Contributors

Friends, family and loved ones of Aaron Swartz.
