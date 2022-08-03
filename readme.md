# send-mail-via-html-forms-and-vanilla-js

nice app with code paser and sending mails usingAPI

The app consists of 4 main parts:
## about
* [converter query strings to object](#converter query strings to object)
* [**bodyParser** (generating html from template and given values)](#bodyParser)
* [generating preview / view of generated parsered html](#generating Preview)
* [sending email](#sending email)


### converter query strings to object
convert query params as key and values of object 
(object format of data is requaired to the next step[with parser])
 
 f(x) call
```javascript
searchParams(string_to_convert)
```
examples of ***string_to_convert***
```javascript
?name=Filip&email=filip%40ciac.me&luckyNumber=20
?name=Mort?age=20
```
**default value is getting from web addres**

### bodyParser
f(x) call
```javascript
parser(parserConfig)
```
#### Parser config object
```javascript
const parserConfig = {
    template: template:String,
    fsValues: values:Object
}
```
#### template
How should look like template?
**fields to replace:**
```javascript
{{name}}
```

**example of template:**
```html
<h1>Hello {{name}}</h1><p>{{age}}</p>ur email:<p>{{email}}<p>
```
#### fsValues
fsValues should be object

#### example of parserConfig
```javascript
const parserConfig = {
	fsValues: {name: 'Filip', email: 'filip@ciac.me', luckyNumber: '20'}
	template: "<h1>Hello</h1><p>{{name}}</p><p>{{email}}<h3>{{age}}</h3><hr>"
}
```
### generating Preview
```javascript
drawTemplate(view)
```
***view*** - just html

### sending email
SOON








