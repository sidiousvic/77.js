```js
function foo(x) {
  var y = x;
  return x + y;
}

var z = foo(9);
```

> **_Engine_**: Hey _Scope_, this is _Engine_. I have an **LHS** reference for a variable called `z`. Ever heard of it?

> **_Scope_**: Yo, yeah, I have. It was just declared a moment ago by _Compiler_. Here, take it.

> **_Engine_**: Thanks. Right after that, I see a **RHS** reference for a variable called `foo`. Heard of that one?

> **_Scope_**: Yeah man, _Compiler_ over here mentioned it too. Here you go.

> **_Engine_**: Alright, thanks. Executing it now... oh wait—now I have a **LHS** reference for a variable called `x`. You got it?

> **_Scope_**: Yup, here it is. It was declared as a parameter for `foo`. Served!

> **_Engine_**: Sick! I'm assigning `9` to `x`. Right after, I'm seeing a **LHS** reference for a variable called `y`...

> **_Scope_**: Got that as well. Take it.

> **_Engine_**: ...and a **RHS** reference for `x`.

> **_Scope_**: We just talked about that one.

> **_Engine_**: Oh yeah. Just checking. I'll assign the value of `x` to `y`.

> **_Engine_**: Hmm. Last thing. I got a couple of **RHS** references in the return statement, one for `x`, one for `y`. Ya got 'em?

> **_Scope_**: Yeahyeahyeah. Here they are.

> **_Engine_**: Wicked!
