This is a simple jQuery plugin which when applied to a form field will create an event which is triggered onClick to display between 1 and 3 sliders for Hours, Minutes, and Seconds. When the slider position is altered it will fill the input field with the relevant time.

The code can easily be called using

<pre>$("#inputelement").timeslider({showseconds:false,showhours:true});</pre>

which causes one element to display the timeslider with no seconds or hours

<pre>$(".elementsToUseTimeslider").timeslider();</pre>