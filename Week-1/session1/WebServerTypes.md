# WEB SERVER
Web server is responsible for serving the static content like html css or js files or some times it is responsible for  performing some calculations and logic and sending response back to the client.

There are different types of web servers

### STATCIC CONTENT WEB SERVER
- This kind of web servers just serve the static content like httml css or js files frrom the disk.
- These servers does not use much resources as they are just servinng the static content reducing the pressure on the computer and its resources.
- Performance of these kind of web serves is high as it  is not performing  any task reducing the load on the computer resources so performance will be high.
- example - Nginx

### DYNAMIC CONTENT WEB SERVER
- This kind of web server serves dynamic pages unlike the static pages  these pages will be generate dynamically with the dynamic content.
- Performance of these kind of web servers will be high than the static content web servers as these web servers needed to process the dynamic data and generate the page on the fly.
- example - ngnix with php, nodejs with handlebars.

### CLOUD BASES WEB SERVERS
- Cloud web servers are hosted in a cloud computing environment, where the web server resources are virtualized and managed by a cloud service provider.
- performance of these cloud based web servers will be good as cloud based servers manage auto scaling.
- example- aws

### SPECIALIZED WEB SERVER
- This kind of server is responsible for performing a single task or functionality 
- Performance will depend on the functionality and the resources used by the functionality.
- Ngnix

### REVERSE PROXY WEB SERVER

- This kind of web servers are placed infornt of server or infornt of client which are responsible to perform some filtrations  or redirect the request to different backend servers.
- The performance will be high as they are very efficient in performing the filtration or redirection tasks.