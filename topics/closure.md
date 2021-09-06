# Closure

WIP

* Memorisation: performance optimiser
* Included in many JS design patterns

When a function is invoked, a new slot of memory is used (the variable environment or execution context). That bit of memory is deleted when the function finished executing. Nothing is remembered apart from the returned data.

**Closure** allows you to hold on to data. It allows function definitions to have persistent memory.

If you return a function from another function, the function that is returned stored its surrounding data (only the data that it references). When the outer function is removed from memory, the surrounding data can still be used via the internal function that was returned.

<pre>
function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

const newFunc = outer();
const newFunc2 = outer();

newFunc(); // 1
newFunc(); // 2
newFunc(); // 3

newFunc2(); // 1
</pre>

This is due to a hidden property: `[[scope]]`. When the function is returned and attached to a new label, the hidden property is still attached.

## P.L.S.R.D
Persistent lexical scope reference data