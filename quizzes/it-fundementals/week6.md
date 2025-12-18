## IT Fundamentals

##### How a computer works

##### Week 6:

##### Networking


# Agenda


# Agenda

## Agenda

- Networking
- The internet
- World Wide Web
- Web Servers
- The assignment


### Networking

#### TCP/IP

#### Model

#### IP Addresses Ports

#### DNS

#### DHCP


### Networking

#### Interconnected computers

```
Computer networking is the practice of connecting
computers and other devices to share data and
resources, enabling communication and
collaboration across distances. Networks use
hardware like routers , switches , and cables, and
software protocols such as TCP/IP to transmit data.
These connections can vary from small local
networks (LANs) in homes or offices to vast global
networks (WANs) like the internet.
Networking facilitates data exchange, resource
sharing (like printers and servers), and
communication (like email and messaging) across
devices. Different network types, such as client-
server and peer-to-peer, serve distinct needs, with
security protocols in place to protect data during
transfer.
```

#### TCP/IP model:

```
The original TCP/IP model is a four-layer framework
for network communication, developed to support
the creation of the internet. It consists of the Link
Layer , which handles physical connections and data
transfer across local networks; the Internet Layer ,
which routes data packets between networks using
IP addresses; the Transport Layer , responsible for
end-to-end communication and data integrity,
primarily using TCP for reliable transmission and
UDP for faster, connectionless transfer; and the
Application Layer , where protocols like HTTP and
FTP enable user-facing applications. This
streamlined model forms the backbone of internet
communication, defining how data is transmitted
and received across diverse networks.
```
### Networking

TCP/IP Model
Original


#### TCP/IP Model layers:

```
The original TCP/IP model, developed by the U.S.
Department of Defense in the 1970 s, is a four-layer
conceptual framework for understanding network
protocols and designing network communication
systems. It stands for Transmission Control
Protocol/Internet Protocol and was foundational in
creating the modern internet. Here’s a breakdown
of the four layers:
```
**1. Link Layer** : The bottom layer, handling the
physical network hardware and connections. It
enables data to move across local network
segments by defining protocols for data
transmission over physical media, like **Ethernet**.

### Networking

TCP/IP Model
Original


#### TCP/IP Model layers:

**2. Internet Layer** : The second layer, responsible for
packet routing across networks. It uses IP (Internet
Protocol) for addressing and forwarding packets
between devices across different networks,
allowing data to traverse vast distances and
network types.
**3. Transport Layer** : The third layer, which manages
end-to-end communication, ensuring data is
reliably transferred between devices. It includes
protocols like **TCP** (Transmission Control Protocol)
for reliable, ordered data delivery, and **UDP** (User
Datagram Protocol) for faster, connectionless
communication where speed is prioritized over
reliability.

### Networking

TCP/IP Model
Original


#### TCP/IP Model layers:

**4. Application Layer** : The top layer, which provides
network services directly to end-users. Protocols
like **HTTP** , **FTP** , and **SMTP** enable applications like
web browsing, file transfers, and email by defining
how software should communicate over the
network.

```
Unlike the OSI model , which has seven layers, the
TCP/IP model is more streamlined and closely
aligned with how data actually flows on the
internet. It is widely used as the core framework for
internet communications.
```
### Networking

TCP/IP Model
Original


```
Models that describe the
functions of a networking
system:
```
- **OSI Model**
    o **7 layers**
- **TCP/IP Original Model**
    o **4 layers**
- **TCP/IP Updated Model**
    o **5 layers**
- **Our book uses the**

###### Original TCP/IP Model.

- **Exam questions are**

###### based on that.

```
Usedbyourbook
```

TCP/IP Model
Original

##### HTTP, HTTPS, FTP, SSH, DNS, DHCP, SMTP, POP, IMAP, TLS/SSL

##### TCP, UDP

```
IP
```
##### ETHERNET, WIFI, MAC

### Protocols


#### IP Addresses:

```
IP addresses are essential in computer networks as
they provide a unique identifier for each device
connected to the network, allowing devices to
locate and communicate with each other. In a
network, when a device (like a computer, phone, or
server) needs to send data to another, it requires
the recipient’s IP address to direct the data to the
correct destination, similar to how a postal address
works for physical mail.
IP addresses also enable routers to forward data
packets across various networks by identifying
where data should go, ensuring it reaches the
correct device regardless of location. Without IP
addresses, devices wouldn’t be able to distinguish
between different destinations, making network
communication chaotic and unreliable.
```
### Networking


#### Private IP Addresses:

```
In networking, IP addresses are categorized into
two main types: private IP addresses for local LANs
and public IP addresses for the internet.
Private IP addresses are reserved for use within
private networks, such as homes, offices, and
internal organizational networks. These IP
addresses are only accessible within the local
network. Devices within a LAN use private IP
addresses to communicate with each other, while
connecting to the internet through a router or NAT
device that maps private addresses to a public IP
address.
The commonly used private IP address ranges are:
```
- **10. 0. 0. 0 to 10. 255. 255. 255** ( 10. 0. 0. 0 / 8 )
- **172. 16. 0. 0 to 172. 31. 255. 255** ( 172. 16. 0. 0 / 12 )
- **192. 168. 0. 0 to 192. 168. 255. 255** ( 192. 168. 0. 0 / 16 )

### Networking


#### Public IP Addresses:

```
In networking, IP addresses are categorized into
two main types: private IP addresses for local LANs
and public IP addresses for the internet.
Public IP addresses are globally unique addresses
assigned to devices that need to communicate over
the internet. These addresses are routable across
the internet, allowing devices to be identified and
accessed by other devices worldwide.
Public IP addresses are allocated by regional
organizations (like ARIN, RIPE, APNIC or SIDN) and
are generally provided to users by ISPs (Internet
Service Providers). Because public IP addresses are
finite, IPv 6 was introduced to provide a larger pool
of IPs to support the growing number of devices
connecting to the internet.
```
### Networking


#### IP Address classes:

```
IP address classes (A, B, C, D, and E) were designed
to categorize IP ranges for different network sizes
and purposes. Classes A, B, and C are used for
standard networking, with Class A supporting the
largest networks and Class C the smallest. Each of
these classes has a designated private IP range—
Class A: 10. 0. 0. 0 – 10. 255. 255. 255 ,
Class B: 172. 16. 0. 0 – 172. 31. 255. 255 , and
Class C: 192. 168. 0. 0 – 192. 168. 255. 255
—reserved for internal, non-internet routable use.
The remaining IPs in these classes are public, used
for internet-connected devices. Class D is reserved
for multicasting, while Class E is for experimental
purposes. Although IP classes are now largely
obsolete (replaced by CIDR), they help illustrate IP
address organization.
```
### Networking


#### IP Address classes:

```
CIDR (Classless Inter-Domain Routing) is a flexible
method for IP address allocation that replaces the
rigid class-based system by allowing variable-length
subnet masks. Introduced in 1993 , CIDR designates
the network portion of an IP address using a suffix
(e.g., / 24 ), which specifies how many bits are
reserved for the network.
This approach allows IP addresses to be allocated in
sizes that fit specific needs, improving the efficiency
of IP usage and preventing address exhaustion,
especially in IPv 4.
CIDR also optimizes routing by reducing the size of
internet routing tables and supports both
subnetting and supernetting for better network
management.
```
### Networking


#### Subnet mask:

```
A subnet mask is a number that divides an IP
address into its network and host components,
helping define the structure of a network and
manage IP addresses more efficiently. In IPv 4 , a
subnet mask looks similar to an IP address (e.g.,
255. 255. 255. 0 ) and uses a combination of binary
ones ( 1 s) and zeros ( 0 s).
```
```
255. 255. 255. 0
11111111. 11111111. 11111111. 00000000
```
```
This is an example of a / 24 subnet. The ones
represent the network portion ( 24 bits) , while the
zeros represent the host portion ( 8 bits). This helps
identify which part of an IP address belongs to the
network and which part identifies the specific
device within that network.
```
### Networking


#### Subnet mask:

```
In binary, 255. 255. 255. 0 translates to
11111111. 11111111. 11111111. 00000000 , where
the first 24 ones ( 1 s) define the network portion,
and the last 8 zeros ( 0 s) are for individual hosts.
With a / 24 subnet mask, a network can support up
to 256 IP addresses ( 28 ), with 254 usable addresses
for devices (since the first address is reserved for
the network identifier, and the last is reserved for
the broadcast address).
This configuration is common in smaller networks,
such as home or small business setups, where
having around 254 usable addresses is typically
sufficient.
In IPv 4 , IP Addresses are 32 - bits.
```
### Networking


#### Subnet mask:

```
A / 27 subnet provides a smaller network size than a
/ 24 , using the first 27 bits of the IP address for the
network portion and leaving the remaining 5 bits
for host addresses. In decimal form, a / 27 subnet
mask is represented as 255. 255. 255. 224.
In binary, 255. 255. 255. 224 translates to
11111111. 11111111. 11111111. 11100000 , where
the 27 ones ( 1 s) specify the network, and the last 5
zeros ( 0 s) are reserved for host addresses within
that network.
This configuration allows for 32 IP addresses ( 25 ),
with 30 usable addresses for devices. The first
address is the network identifier, and the last is the
broadcast address, leaving 30 for hosts.
```
### Networking


#### Subnet mask:

```
To determine the network segment of an IP
address with a / 27 subnet mask, convert both
the IP address and the subnet mask
( 255. 255. 255. 224 for / 27 ) into binary.
```
```
Then, apply a bitwise AND operation between
the two. This operation clears the host bits of
the IP address, leaving only the network
portion and producing the network address.
This network address acts as the identifier for
the network segment , showing where that IP
address falls within the subnet.
```
### Networking

##### Example: 192.168.1.100/

##### Calculate the network segment

IP Address: 11000000.10101000.00000001.
Subnet Mask: 11111111.11111111.11111111.
-------------------------------------------------
Network Addr: 11000000.10101000.00000001.

This gives 192.168.1.96 in decimal as the network
address.

For a /27 subnet, each segment (or subnet) has 32
IP addresses (2^5 ).The range of this network
segment is from 192.168.1.96 to 192.168.1.127.


#### Supernetting:

```
Supernetting is a technique that combines
multiple smaller networks (subnets) into a
single, larger network by reducing the subnet
mask length, allowing multiple contiguous IP
ranges to be managed as one.
```
```
For example, four Class C networks can be
combined into a single supernet, like
192. 168. 0. 0 / 22 , covering a larger IP range with
one address block.
This approach helps simplify routing by
allowing routers to use one entry instead of
several for multiple networks, reducing the
size of routing tables and enhancing network
efficiency and scalability.
```
### Networking

##### Example:

For example, combining four Class C networks
with addresses starting at

- 192.168.0.0/24
- 192.168.1.0/24
- 192.168.2.0/24
- 192.168.3.0/24

can create a single supernet with the
address 192.168.0.0/22, covering all four
subnets in one address block.


#### Ports:

```
Ports are essential in networking as they work in
conjunction with IPv 4 addresses to direct traffic to
specific applications or services running on a
device. While an IP address identifies the device on
the network, ports allow multiple services to
operate simultaneously on that address by listening
on designated port numbers (e.g., port 80 for HTTP
and port 443 for HTTPS). A complete
communication endpoint is defined by the
combination of an IP address and a port number,
known as a socket (e.g., 192. 168. 1. 10 : 80 ). Ports are
categorized into three ranges: Well-Known Ports ( 0 -
1023 ) for common services, Registered Ports ( 1024 -
49151 ) for less common applications, and Dynamic
Ports ( 49152 - 65535 ) for temporary connections,
enabling organized and efficient communication
across networks.
```
### Networking


#### DHCP:

```
DHCP (Dynamic Host Configuration Protocol) is a
network management protocol that automatically
assigns IP addresses and other configuration
parameters to devices on a network, simplifying the
setup and management of IP address allocation.
When a device connects to a network, it broadcasts
a DHCP Discover message to find available DHCP
servers, which respond with a DHCP Offer
containing an available IP address and configuration
details. The device then requests the offered IP
with a DHCP Request , and the server confirms the
assignment with a DHCP Acknowledgment. This
automation reduces manual configuration errors,
efficiently manages IP address allocation, facilitates
network changes, and provides centralized
management, making DHCP essential for modern
networking.
```
### Networking


#### DNS:

```
DNS (Domain Name System) is a crucial component
of the internet that translates human-readable
domain names (like http://www.example.com) into
machine-readable IP addresses (such as 192. 0. 2. 1 ),
enabling users to access websites easily. It operates
in a hierarchical structure, managing domain names
efficiently while supporting various resource
records, such as A records for IP mapping, MX
records for email servers, and CNAME records for
aliasing. DNS servers cache query results to speed
up name resolution and reduce server load, while
also providing redundancy and load balancing
through multiple servers for the same domain.
Overall, DNS simplifies web navigation and ensures
effective communication between devices by
resolving domain names to IP addresses.
```
### Networking


#### DNS:

```
In a Local Area Network (LAN), DNS (Domain Name
System) facilitates the translation of user-friendly
domain names into IP addresses, allowing devices
to communicate easily without memorizing
numerical addresses. It provides local name
resolution for devices, enabling access to resources
like printers and file servers using easily memorable
names (e.g., printer.local).
A local DNS server centralizes the management of
IP addresses and hostnames, streamlining network
administration, and can cache frequently accessed
resources to speed up name resolution.
Additionally, organizations can create structured
domain naming conventions (e.g., company.local),
improving organization and clarity in identifying
devices.
```
### Networking


#### DNS:

```
In the Domain Name System (DNS), root
nameservers, Top-Level Domain (TLD) nameservers,
and authoritative nameservers serve distinct roles
in domain name resolution. Root nameservers are
the highest level in the DNS hierarchy, directing
queries to the appropriate TLD nameservers based
on the domain extension (e.g., .com, .org). TLD
nameservers manage domains within specific top-
level domains and provide referrals to authoritative
nameservers, which hold the actual DNS records for
individual domains. Authoritative nameservers are
responsible for delivering definitive answers to DNS
queries by providing the specific IP addresses or
resource records associated with the requested
domain. Together, these nameservers facilitate the
efficient and accurate resolution of domain names
to IP addresses on the internet.
```
### Networking


#### DNS – A Records:

```
A records (Address records) are a crucial type of
resource record in the Domain Name System (DNS)
that map domain names to their corresponding
IPv 4 addresses, enabling users to access websites
using human-readable names instead of numerical
addresses.
Their primary function is to resolve a domain name,
such as http://www.example.com, to its associated IP
address, allowing traffic to be directed to the
correct server. A records can also support
subdomains, enabling distinct services under the
same main domain, and can be configured to point
to multiple IP addresses for load balancing or
redundancy. Additionally, DNS servers cache A
records for a specified duration, improving the
speed of subsequent requests for the same domain.
```
### Networking

helpdesk

helpdesk.enschede.nl

192.168.200.11


### Activity

On your Ubuntu VM:

What is your IP address?

On your Windows VM:

What is your IP address?

On your HOST machine:

What is your IP address?

Can these three machines PING

each other?


### The internet

#### ARPANET TCP/IP Decentralized

#### email

#### file transfers


#### ARPANET:

```
The original Internet was created by a team of
researchers and engineers led by the U.S.
Department of Defense's Advanced Research
Projects Agency (ARPA), with the project initially
called ARPANET.
Launched in the late 1960 s, ARPANET was
developed to enable reliable communication
between computers across large distances and
connect research institutions to share data.
The purpose was to create a decentralized network
that could withstand partial outages, making it
resilient to disruptions, particularly in the context of
Cold War concerns over secure communication.
```
### The internet


#### ARPANET → internet:

```
The first successful ARPANET message was sent in
1969 , and the project quickly expanded to include
other universities and research centers.
Over time, ARPANET evolved beyond military and
research use, leading to the development of
standardized protocols like TCP/IP in the 1970 s and
1980 s.
These protocols allowed more devices and
networks to interconnect, laying the foundation for
the modern, global Internet.
```
### The internet


### The internet

#### Global network

```
The Internet is a vast global network of
interconnected computers and devices that
communicate using standardized protocols,
enabling the sharing and exchange of data,
resources, and services. This connectivity allows
users to engage in various activities, such as
browsing websites, sending emails, streaming
videos, and online communication, regardless of
geographical location. The Internet operates on
protocols like the Internet Protocol (IP) and
Transmission Control Protocol (TCP), which ensure
reliable and orderly data transmission. While the
Internet encompasses the World Wide Web
(WWW), which consists of interlinked documents
and multimedia accessed via web browsers, it also
includes numerous other services, such as email
and file sharing.
```

#### Decentralized:

```
One of the defining characteristics of the Internet is
its decentralized nature, meaning no single entity
owns or controls it. Instead, it relies on a
distributed architecture where multiple
organizations and individuals contribute to its
maintenance and operation.
The Internet is dynamic and continually evolving,
with new technologies and applications emerging
to meet user and business needs. Its transformative
impact on modern society has revolutionized
communication, information access, and
commerce, making it an integral part of daily life for
billions of people worldwide and influencing
various fields, including education, healthcare, and
entertainment.
```
### The internet


#### Complex network:

```
The Internet is more than just the World Wide Web
(WWW) because it encompasses a wide range of
protocols and services beyond web browsing,
including email, file transfer, instant messaging, and
VoIP. It is built on a complex infrastructure of
physical devices like routers and servers that
facilitate various forms of communication and data
transfer, enabling numerous applications and
services that operate independently of the web.
The Internet's decentralized nature allows multiple
organizations and individuals to manage their
networks and services, resulting in a diverse
ecosystem.
Furthermore, the Internet predates the WWW,
which was developed in 1989 as a specific
application for sharing information via hypertext.
```
### The internet


##### A Trip Through the Internet

Image: https://www.washingtonpost.com/graphics/national/security-of-the-internet/bgp/
BGP protocol: https://en.wikipedia.org/wiki/Border_Gateway_Protocol


### Activity

Do some research:

Explain why Bulletin Board Systems

(BBSs) are considered precursors to the

internet. BBSs emerged in the late 1970s

and became popular in the 1980s and

early 1990s.

Make groups of two or three persons,

discuss the results.


### World Wide Web

#### Hypertext

#### documents

#### HTTP

#### HTTPS

#### Hyperlinks

#### Web

#### development


### World Wide Web

#### Hypertext documents

```
The World Wide Web (WWW) is a system of
interlinked hypertext documents and multimedia
content accessed via the Internet, enabling users to
view and interact with a vast array of information
through web browsers.
Developed by Tim Berners-Lee in 1989 , the WWW
revolutionized information sharing by providing a
user-friendly interface that allows users to navigate
between different web pages using hyperlinks.
This interconnectivity facilitates easy access to
related content, creating a rich browsing experience
that has become fundamental to the way people
access information online.
```

### World Wide Web

#### Hyperlinks

```
Hyperlinks are essential to the Internet because
they connect web pages, allowing users to navigate
effortlessly between related content across the vast
web. By linking different pages, documents, and
resources, hyperlinks create a web-like structure of
interconnected information, which is the
foundation of the World Wide Web. This
interconnectivity facilitates information discovery,
improves accessibility, and enhances the user
experience by providing a straightforward way to
access related topics or additional information.
Hyperlinks also play a significant role in search
engine optimization (SEO) by helping search
engines index content and understand the
relationships between pages, which influences
search rankings and the discoverability of content
online.
```

#### Web sites:

```
Key features of the World Wide Web include the
organization of content into web pages and
websites, each identified by a unique Uniform
Resource Locator (URL), and support for various
multimedia formats such as text, images, audio, and
video.
The WWW primarily uses Hypertext Transfer
Protocol (HTTP) for data transfer, with HTTPS
providing secure, encrypted communication.
Designed to be accessible from any device with an
Internet connection, the World Wide Web has
transformed communication, education,
commerce, and entertainment, becoming an
integral part of daily life and shaping modern
society.
```
### World Wide Web


#### Web site development:

```
HTML, CSS, and JavaScript are foundational
technologies that play a crucial role in the
development and functionality of the World Wide
Web. Together, they create the structure, style, and
interactivity of web pages, enabling a rich user
experience.
HTML serves as the backbone of web pages,
providing the fundamental structure and content
that browsers interpret and render. It defines
various elements such as headings, paragraphs,
links, images, lists, and forms using markup tags. By
utilizing semantic markup, HTML allows developers
to describe the meaning of the content through
tags like <header>, <footer>, <article>, and
<section>. This structured approach enables users
to understand and navigate web content effectively.
```
### World Wide Web


#### Web site development:

```
CSS is responsible for the visual presentation and
layout of HTML elements on a web page. It allows
developers to apply styles such as colors, fonts,
spacing, and positioning, ensuring that web pages
are aesthetically pleasing and user-friendly.
```
```
CSS also facilitates responsive design techniques,
enabling web pages to adapt seamlessly to different
screen sizes and devices.
This adaptability is crucial for providing a consistent
user experience across various platforms, from
desktops to smartphones and tablets.
```
### World Wide Web


#### Web site development:

```
JavaScript adds interactivity and dynamic behavior
to web pages, enhancing user engagement. It
enables developers to create features such as form
validation, interactive maps, animations, and real-
time updates.
One of its key capabilities is asynchronous
communication with servers through techniques
like AJAX (Asynchronous JavaScript and XML), which
allows web applications to update content without
requiring a full page refresh. The Fetch API replaces
AJAX by providing a simpler, promise-based way to
make asynchronous HTTP requests in JavaScript.
This functionality contributes to a smoother and
more responsive user experience, making JavaScript
an essential technology for modern web
development.
```
### World Wide Web


### Activity

On your Ubuntu VM:

Create a simple HTML website in which

you describe one of your hobbies.

Put the HTML files in a new directory

named website in your home folder on

Ubuntu.

For reference purposes use this site:

https://www.w3schools.com/html/


### Web Servers

#### HTTP

#### HTTPS

#### Apache

#### NGINX

#### IIS

#### Linux

#### Load

#### balancers


#### Web Servers:

```
Web servers are essential components of internet
infrastructure that store, process, and deliver web
content to users. They can be categorized into static
servers, which serve fixed content like HTML files,
and dynamic servers, which generate content
on-the-fly using server-side scripts such as PHP or
Python.
Communication occurs primarily through HTTP
(Hypertext Transfer Protocol) and HTTPS (HTTP
Secure) protocols, with HTTPS providing an added
layer of security through encryption. Performance
can be enhanced through techniques like caching,
load balancing, and Content Delivery Networks
(CDNs). Security measures are crucial to protect
against common cyber threats, including DDoS
attacks and SQL injection.
```
### Web Servers


#### Load balancing:

```
Load balancing is the process of distributing
incoming network traffic across multiple servers to
prevent any single server from becoming
overwhelmed, thereby enhancing application
performance and reliability. It can be implemented
using hardware or software load balancers, with
cloud-based solutions also available.
Various algorithms, such as Round Robin and Least
Connections, determine how requests are
distributed. Load balancers perform health checks
on servers to ensure they are operational,
redirecting traffic as needed to maintain service
availability. The benefits of load balancing include
improved performance, increased redundancy, and
enhanced scalability, making it essential for
managing varying levels of web traffic effectively.
```
### Web Servers


### Web Servers

#### Popular webservers

```
The top three popular web servers are Apache
HTTP Server , Nginx , and Microsoft Internet
Information Services (IIS).
Apache is known for its flexibility and is commonly
used on Linux, Windows, and macOS.
Nginx , also versatile, excels in handling high traffic
and runs on the same operating systems.
IIS is used on Windows Server and is favored in
environments that rely on Microsoft technologies.
Together, these servers are widely utilized for their
performance and compatibility across various
platforms. The most commonly used operating
system for web servers is Linux , particularly due to
its stability, security, and open-source nature.
```

### Web Servers

#### Python webserver

```
You can easily use Python 3 to create a simple static
web server with the built-in http.server module. By
navigating to the directory containing your static
files in the terminal, you can start an HTTP server
on port 8000 , by running the command:
python 3 - m http.server 8000
You can then access the server by visiting
http://localhost: 8000 in a web browser, where
you'll see a list of files or the content of an
index.html file if it exists.
```
```
While this method is useful for development and
testing, it's not recommended for production
environments, where more robust web servers like
Apache or Nginx are preferable.
```

### Activity

On your Ubuntu VM:

Open the terminal and navigate to the

directory where you have created a

website describing one of your hobbies.

Use python3 to start a webserver to

host this website on port 8000.

python3 -m http.server 8000

Use the web browser in Ubuntu

to visit your website.

[http://localhost:8000](http://localhost:8000)


### The assignment

#### Networking The internet WWW Web Servers


- Do the practical assignments of

week 6 found on Brightspace

### The Assignment


- Read chapters 11 & 12 of the book

### Homework


Next week’s topics include:

- Cloud computing
- VMs and Containers
- Native- & Web apps

```
Do your homework !!!
```
```
Read the book !!!
```
### See you next week


