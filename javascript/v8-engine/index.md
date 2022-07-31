NodeJS uses V8 engine because it is independent (is not coupled in any browser) and since is its used in Google Chrome it is pretty safe choice. Moreover it is portable and efficient since it is written in C++

Other engines:
- JavaScriptCore (Safari)
- SpiderMonkey (Firefox)

JS is interpreted language. However, modern engines no longer just interpret JS, they also compile it.
JS is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution