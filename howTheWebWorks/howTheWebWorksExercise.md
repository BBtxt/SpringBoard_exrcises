# How the Web Works Exercise

1. What is HTTP?
   1. Http stands for hyper text protocol and is the protocol that the internet uses to transmit and receive data. 
2. What is URL?
   1. A URL is a human readable string used to navigate the internet. URL stands for uniform resource locator. Each website has an unique url address. 
3. What is DNS?
   1. DNS stands for Domain Name System. It is way to parse URLS/domain names into IP address. It helps human remember website names and not IP address. 
4. What is a Query String?
   1. A Query string is attached to the end of a url when using the search functionality of a website. 
5. What are two HTTP verbs and how are they different?
   1. The two HTTP verbs are GET and POST. GET is used in the header of a HTTP request to get information from a site. With the verb there are no mutations to the web server. While, POST contains a payload that is ingested by the site and mutated on the web server. 
6. What is a HTTP request?
   1. An HTTP request is a request made by a client via HTTP/S to a named host. The host is mostly a web server. The request is made up of a request line, headers, and message.
7. What is a HTTP response.
   1. A HTTP response is the response to the request and contains the same three parts.
8. What is a HTTp header. 
   1. A HTTP header is one of the parts of a req/res. It contains information for the client or the server. This information  describes the resources that need to be fetched or the location of the web server. 
   2. Header for http://www.phdcomics.com/comics/archive.php?comicid=946
    date: Wed, 29 Nov 2023 03:36:49 GMT
    server: Apache
    cache-control: max-age=600
    expires: Wed, 29 Nov 2023 03:46:49 GMT
    vary: Accept-Encoding,User-Agent
    content-encoding: gzip
    content-length: 7548
    content-type: text/html; charset=UTF-8
9. What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?
   1.  First my browser checks if i have that ip address for the URL. If I've never visited the site before then my browser reaches out to the DNS server. The DNS server then sends my browser the right ip address for the website. Next, my browser sends a HTTP request to the web server at the ip. The web server thens sends back a http response to my browser with responce body that contains the html code for the webpage. If there are any assets in that file that are also needed my browser then sends requests to complete the build of the website. 

10. ```❯ curl https://icanhazdadjoke.com/search\?term\=pirate
    What did the pirate say on his 80th birthday? Aye Matey!
    What does a pirate pay for his corn? A buccaneer!
    Why couldn't the kid see the pirate movie? Because it was rated arrr!
    Why are pirates called pirates? Because they arrr!
    Why do pirates not know the alphabet? They always get stuck at "C".
```
11. ```❯ dig icanhazdadjoke.com
    ; <<>> DiG 9.10.6 <<>> icanhazdadjoke.com
    ;; global options: +cmd
    ;; Got answer:
    ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 26843
    ;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 0

    ;; QUESTION SECTION:
    ;icanhazdadjoke.com.		IN	A

    ;; ANSWER SECTION:
    icanhazdadjoke.com.	32	IN	A	104.21.66.15
    icanhazdadjoke.com.	32	IN	A	172.67.198.173

    ;; Query time: 42 msec
    ;; SERVER: 192.168.0.1#53(192.168.0.1)
    ;; WHEN: Tue Nov 28 19:51:17 PST 2023
    ;; MSG SIZE  rcvd: 68
```
