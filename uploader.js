const http = require('http')
const formidable = require('formidable')
const fs = require('fs')

http.createServer((req, res) => {
    //Check if a request is made to this url path
    if(req.url == '/fileupload' && req.method.toLowerCase()==='post'){
        console.log('we hit here')
        const form = formidable({multiples:true})
        form.parse(req, (err, field, files) => {
            let oldPath = files.filetoupload.path
            let newPath = `/home/bilard/Desktop/umuzi/NodeJS-Umuzi/${files.filetoupload.name}`
            fs.rename(oldPath, newPath, (err)=>{
                if(err){
                    throw err;
                }
                res.write('File Uploaded and saved to ' + newPath)
                res.end()
            })
        })
    }else{
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
        res.write('<input type="file" name="filetoupload" ><br>')
        res.write('<input type="submit">')
        res.write('</form>')
        res.end()
    }

}).listen(8080)