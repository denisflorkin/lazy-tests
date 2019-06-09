Use a "Leaf" when you need a dumb component

A "Leaf" is passed down all the props it needs to fully render (might be loading tho.) from its parent, it has not state (usually is a PFC), it doesn't do operation on the data passed down to it (this shouldbe done in container at viewModel convertion time).

a "Leaf" 'just renders things



