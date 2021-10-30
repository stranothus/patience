# Patience

Patience is tool for creating longer waits than allowed in default JavaScript. A `setTimeout` can only wait for 2147483647 milliseconds, at maximum, which is about 24 days. That's fine in some cases, but large scale projects might need longer waits.

Patience uses `longTimeout`, a command nearly exactly like `setTimout`, but without any time limit by combining multiple `setTimeout`s for you in a quick and efficient manner. You can use the function just like `setTimeout`. 