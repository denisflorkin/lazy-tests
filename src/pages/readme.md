Use a "Page" when you are rendering a route

"Page" should take care of meta for seo etc. (doc title etc. - reat-helmet)

pages should insert as few DOM node as possible, ideally none, only taking care of 
- changing doc meta (title tag etc.)
- passing down router props 
  that important if a data fetcher (container) needs it (like a podcast id)
- rendering its children
