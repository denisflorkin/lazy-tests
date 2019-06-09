Use a "Container" when you are injecting/fetching data

"Container" should take of data injecting/fetching for its children
it is also the place to run any mapping/manipulation on network data to make them "pretty" for the front end (applying view models etc.)


Ideally container should not output DOM node, just pass down children and attach data onto it.
