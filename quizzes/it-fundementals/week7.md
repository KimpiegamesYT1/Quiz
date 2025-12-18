## IT Fundamentals

How a computer works

```
Week 7:
Modern computing
```

# Agenda


# Agenda

## Agenda

- Web apps & Native apps
- VMs & Containers
- Emulation
- Cloud computing
- Artificial Intelligence
- Quantum computing
- The assignment


### Web apps & Native apps

#### HTTP Electron WebAssembly Native


### Web apps

#### Web applications:

```
You can create web applications using just HTML,
CSS, and JavaScript, as these technologies form the
core of web development.
HTML provides the structure and content of the
web app, defining elements like headings,
paragraphs, and forms. CSS is used to style the app,
controlling layout, colors, fonts, and overall visual
presentation. JavaScript adds interactivity and
functionality, allowing for dynamic content updates,
user input handling, and asynchronous operations
(like fetching data from APIs).
Together, they enable the creation of fully
functional web applications that run in a browser.
```

### Web apps

#### HTTP protocol:

```
Web applications rely on the HTTP protocol to
facilitate communication between clients (such as
browsers) and servers. Through HTTP requests and
responses, web apps can send data, retrieve
resources, and interact dynamically with users over
the internet. HTTP (Hypertext Transfer Protocol) is a
request-response protocol used for communication
between clients (like web browsers) and servers. A
client sends an HTTP request that includes a
method (e.g., GET or POST), a resource URL, and
optional headers and body data. The server
processes this request and responds with a status
line (indicating the response status), headers
(providing metadata about the response), and a
body containing the requested data (such as HTML,
images, or JSON). This cycle facilitates the retrieval
and exchange of information on the web.
```

#### HTTP verbs:

```
HTTP methods, also known as verbs, define the
actions a web app can perform on a resource. The
most common methods include:
```
```
POST for sending data to create new resources,
GET for retrieving data,
PUT for updating or creating resources,
PATCH for applying partial updates,
DELETE for removing resources,
HEAD for fetching headers without the body.
```
```
These methods facilitate CRUD (Create, Read,
Update, Delete) operations, enabling dynamic
interactions between users and data within web
applications.
```
### Web apps


#### HTTP status codes:

```
HTTP status codes are three-digit responses sent by
a server to indicate the outcome of an HTTP
request. These codes are categorized into groups:
2 xx codes (like 200 OK) indicate successful requests,
3 xx codes (like 301 Moved Permanently) signal
redirections, 4 xx codes (like 404 Not Found)
indicate client errors, and 5 xx codes (like 500
Internal Server Error) represent server errors.
A web app can use these codes to handle various
scenarios, such as displaying appropriate messages
to users for successful actions, redirecting users to
different pages, or managing error handling to
improve user experience and troubleshoot issues.
```
### Web apps


#### URL components:

```
A URL (Uniform Resource Locator) consists of
several components.
```
**1. Scheme:** The protocol used (e.g., http, https).
**2. Host:** The domain name or IP address of the
    server (e.g., [http://www.example.com).](http://www.example.com).)
**3. Port (optional):** The port number for the
    connection (e.g., : 443 for HTTPS).
**4. Path:** The specific location of the resource on
    the server (e.g., /folder/page.html).
**5. Query (optional):** Key-value pairs for additional
    parameters (e.g., ?key 1 =value 1 ).
**6. Fragment (optional):** A specific section within
    the resource (e.g., #section 1 ).

```
https://www.example.com:443/folder/page.html?key1=value1#section
```
### Web apps


#### Desktop web apps:

```
Electron is a framework that allows developers to
create cross-platform desktop applications using
web development technologies like HTML, CSS, and
JavaScript.
By leveraging these familiar tools, developers can
build applications that run on Windows, macOS,
and Linux, using a single codebase. Electron
combines a web browser (Chromium) and a
Node.js runtime, enabling access to native
operating system features, such as file system
interactions and notifications, while still rendering
web content.
This makes it possible to create rich user interfaces
and integrate web APIs seamlessly, allowing
developers to bring their web applications to the
desktop with minimal effort.
```
### Web apps


#### Advantages:

```
Using Electron for desktop app development offers
several advantages over native app development,
including cross-platform compatibility that allows a
single codebase to run on Windows, macOS, and
Linux.
Developers can leverage familiar web technologies
like HTML, CSS, and JavaScript, making the
transition easier. Electron also facilitates the
creation of rich, responsive user interfaces while
providing access to native operating system
features through Node.js.
Additionally, its active community and extensive
ecosystem of resources and plugins enhance
development capabilities and support.
```
### Web apps


#### Disadvantages:

```
While Electron offers many benefits, it also has
some disadvantages compared to native app
development. One key drawback is that Electron
applications can be larger in size due to bundling a
web browser (Chromium) and Node.js, which may
lead to increased memory usage and slower
performance compared to lightweight native apps.
Additionally, Electron may not always provide the
same level of native look and feel, potentially
leading to a less seamless user experience. Security
can also be a concern, as web technologies may
introduce vulnerabilities if not handled properly.
Furthermore, some features that rely on deep
system integration may be harder to implement in
Electron, requiring workarounds. Lastly, the reliance
on web technologies might limit access to
advanced platform-specific functionalities.
```
### Web apps


#### WebAssembly:

```
The use of WebAssembly (Wasm) can significantly
improve the performance of web applications,
helping to overcome some of the speed limitations
associated with traditional JavaScript.
```
```
WebAssembly is a binary instruction format that
allows code written in languages like C, C++, and
Rust to run in the browser at near-native speed.
This capability is especially beneficial for
performance-intensive tasks, such as gaming, image
processing, or complex calculations, where
JavaScript may fall short.
```
### Web apps


#### WebAssembly:

```
By compiling to WebAssembly, developers can take
advantage of lower-level programming
optimizations, resulting in faster execution times
and improved efficiency.
```
```
Additionally, WebAssembly allows for better
resource management, making it possible to
offload heavy computational tasks from the main
thread, which can enhance overall application
responsiveness.
```
```
However, while WebAssembly can improve
performance, it is most effective when used
alongside other web technologies and is not a
complete replacement for them.
```
### Web apps


#### WebAssembly (WASM) for high-performance Web-Applications?!


#### WebAssembly (WASM) for high-performance Web-Applications?!

**Old code can be ported to WebAssembly, some examples:**

Commander Keen:

[http://www.jamesfmackenzie.com/chocolatekeen/](http://www.jamesfmackenzie.com/chocolatekeen/)

Space Cadet Pinball:

https://alula.github.io/SpaceCadetPinball/

**New software being developed with WebAssembly, some examples:**

Adobe Photoshop in the browser:

https://helpx.adobe.com/photoshop/using/photoshop-web-faq.html

Raylibgames: https://www.raylib.com/games.html


#### Going native:

```
Native apps are software applications specifically
designed for a particular operating system or
platform, such as iOS or Android, using platform-
specific languages and tools like Swift for iOS or
Java/Kotlin for Android.
```
```
They generally offer superior performance and
responsiveness because they are optimized for
their respective platforms, allowing for direct
access to device hardware and APIs.
```
```
Additionally, native apps provide a more seamless
user experience by adhering to the design
guidelines of the operating system, which can
enhance user satisfaction.
```
### Native apps


#### Advantages:

```
Developing native apps also allows for better access
to device features, such as the camera, GPS, and
notifications, enabling more advanced capabilities.
They can function offline or with limited
connectivity by storing data locally on the device,
which is particularly beneficial for users in areas
with poor internet access.
Furthermore, native apps can be distributed
through official app stores, improving visibility and
credibility while providing users with a trusted
installation process.
These factors make native app development a
compelling choice when performance, user
experience, and deep integration with device
features are priorities.
```
### Native apps


#### Disadvantages:

```
Developing native apps comes with several
disadvantages, including higher development costs
due to the need for separate codebases for each
platform, which also results in longer development
times and maintenance challenges. This approach
requires platform-specific expertise, limiting the
available talent pool and increasing hiring costs.
Additionally, because native apps are platform-
specific, an app built for iOS won’t run on Android,
which can restrict audience reach unless separate
versions are created.
These factors can make native app development
more complex and resource-intensive compared to
alternatives like cross-platform or web app
development.
```
### Native apps


#### Single codebase:

```
A cross-platform solution refers to a development
approach that enables applications to run on
multiple operating systems or devices from a single
codebase. This is achieved by using frameworks and
tools that abstract away the differences between
platforms, allowing developers to write code once
and deploy it across various environments, such as
iOS, Android, Windows, and web browsers.
Cross-platform solutions can significantly reduce
development time and costs, as they eliminate the
need for separate codebases for each platform.
Popular frameworks for cross-platform
development include React Native , Flutter , .NET
MAUI , and Ionic. These frameworks offer native
device access and a consistent user experience,
appealing to developers who want to reach a wider
audience without duplicating effort.
```
### Cross platform


#### Recap:

```
Native apps are specifically developed for a
particular platform using platform-specific
languages, offering the best performance and full
access to device features through direct installation.
Cross-platform apps use frameworks to create a
single codebase that runs on multiple platforms,
allowing for some native feature access but with
slightly less optimization than native apps.
Web apps run in a web browser, accessed via URLs,
and are built with standard web technologies,
making them easily accessible but limited in their
ability to utilize device features.
In summary, native apps excel in performance and
integration, cross-platform apps provide a balance
of reach and functionality, while web apps offer
broad accessibility at the cost of native capabilities.
```
### App development


```
Compiler
```
```
00000100 01110000
10100000 11100011
10010011 00000000
00000000 11100000
00000001 00110000
```
```
int number = 4;
int factorial = number;
for (int i = number - 1; i > 0; i--)
{
factorial *= i;
}
```
int number = 4;

int factorial = number;
for (int i = number - 1; i > 0; i--)
{
factorial *= i;
}

```
Compiler
```
```
Bytecode /
intermediate
language
```
```
number = 4
factorial = number
for i in range(number – 1, 1, -1):
factorial *= i
```
```
C
```
```
Java
```
```
Python
```
```
HTML
CSS
JavaScript
```
```
Interpreter
```
```
JVM
```
```
Web browser
```
```
Web app
```
### App development


### Activity

On your Ubuntu VM:

In the previous week you’ve created a

simple web site describing one of your

hobbies.

Add CSS styling to this website.

Try to create a separate CSS file.

For reference purposes use this site:

https://www.w3schools.com/css/


### Virtual Machines & Containers

#### Operating

#### Systems

#### Kernel Hypervisors

#### VMware

#### Hyper-V

#### Proxmox


#### VMs:

```
A virtual machine (VM) is a software-based
emulation of a physical computer that runs its own
operating system and applications. VMs allow users
to run multiple operating systems on a single
physical machine, enabling efficient use of
resources.
```
```
Each VM operates in its own isolated environment,
meaning issues within one VM do not affect others
or the host system. This makes VMs ideal for
various applications, such as software
development, testing, and running legacy
applications.
```
### Virtual Machines


#### Hypervisor:

```
The management of VMs is facilitated by a
hypervisor, which is a software layer that enables
the creation and operation of multiple VMs on a
single physical host.
Hypervisors come in two types:
Type 1 (bare-metal): runs directly on the hardware,
offering better performance and efficiency.
Type 2 (hosted): runs on top of an existing
operating system, making it easier to set up but
potentially less efficient.
The hypervisor allocates resources like CPU,
memory, and storage to each VM, ensuring they
can operate independently while maximizing the
use of the underlying hardware. This virtualization
technology enhances flexibility, scalability, and
resource management in computing environments.
```
### Virtual Machines

**Examples of type 1 hypervisors:**

**Examples of type 2 hypervisors:**


#### Containers:

```
Containers are lightweight, portable units that
package an application and its dependencies
together, allowing it to run consistently across
different computing environments.
Unlike traditional virtualization methods that use
virtual machines (VMs) with their own operating
systems, containers share the host operating
system's kernel while maintaining isolation
between applications. This makes containers more
efficient in terms of resource utilization and startup
time.
Docker is a popular container runtime that
facilitates the creation and management of
containers. Kubernetes is an open-source platform
that automates the deployment and management
of containerized applications.
```
### Containers


#### Container orchestration:

```
Each container includes everything needed to run
the application—such as code, libraries, and
configuration files—ensuring that it behaves the
same regardless of where it's deployed, whether on
a developer's machine, a testing server, or in
production.
Containers are commonly managed with
orchestration tools like Kubernetes , which
automate deployment, scaling, and management of
containerized applications. This approach simplifies
development and operations, enabling teams to
build, test, deploy applications quickly and reliably.
Overall, containers are ideal for microservices
architectures and cloud-native applications, offering
flexibility and efficiency in modern software
development.
```
### Containers


#### VMs or Containers:

```
When choosing between virtual machines (VMs)
and containers, it's essential to understand their
strengths and ideal use cases.
VMs provide a robust solution for scenarios
requiring strong isolation and support for multiple
operating systems , making them suitable for legacy
applications with specific configurations.
Containers excel in environments focused on
microservices architecture and rapid development,
as they offer lightweight, fast startup times and
efficient resource utilization by sharing the host OS
kernel. Containers ensure a consistent environment
across development and production, making them
perfect for situations where scalability and resource
optimization are key.
```
### VMs vs Containers


#### VMs vs Containers


### Activity

Do the Container assignment found on

Brightspace in week 7.


### Emulation

#### Cross-

#### Platform

#### Compatibility

#### Development

#### &

#### Testing

#### Software

#### Preservation

#### Educational

#### Benefits


### Emulation

###### Cross-Platform Compatibility:

```
Emulation is the process of mimicking the
functionality of one system using another, allowing
software or applications designed for a specific
hardware architecture to run on a different one.
This is achieved by translating the instructions
meant for one Instruction Set Architecture (ISA)
into the instructions of another. For example, you
could run software designed for an x 86 processor
on an ARM processor by using an emulator that
translates x 86 instructions to ARM instructions in
real-time.
This enables compatibility across diverse hardware
platforms, making emulation a powerful tool in
software development and testing.
```

#### Development and Testing:

```
One primary use case for emulation is in software
development and testing, particularly when
developers need to run applications in
environments that differ from their development
systems.
For instance, if a developer is working on an
application for a specific console or embedded
system, they can use an emulator to test the
application without needing the actual hardware.
This allows for quicker iterations, as developers can
debug and refine their code without the overhead
of deploying it on the target device.
```
### Emulation


#### Software Preservation:

```
Emulation is also useful in legacy software
preservation. Many older applications were
designed for outdated hardware or operating
systems that are no longer supported.
By using emulators, users can continue to run these
applications on modern systems, preserving their
functionality and ensuring access to historical
software.
This is particularly valuable in industries like
gaming, where emulators can bring classic titles to
contemporary platforms, allowing new generations
of users to experience them.
```
### Emulation


#### Educational Benefits:

```
Additionally, emulation plays a significant role in
educational environments. It allows students and
researchers to explore different ISAs without
needing physical hardware for each architecture.
By running various ISAs on a different processor
through emulation, learners can gain insights into
how different systems operate, experiment with
low-level programming, and understand the
implications of architectural design choices.
Overall, emulation provides flexibility, accessibility,
and preservation, making it a valuable tool across
multiple fields.
```
### Emulation


### Activity

Do the Emulation assignment found on

Brightspace in week 7.


### Cloud computing

#### IaaS PaaS FaaS SaaS


### Cloud computing

#### Into the cloud:

```
Cloud computing has revolutionized the way
businesses and individuals access and manage
technology resources. At its core, cloud computing
allows users to store, manage, and process data
over the internet, rather than relying on local
servers or personal computers.
```
```
This shift has enabled greater flexibility, scalability,
and cost-effectiveness. Understanding the various
deployment models and service categories is
essential for leveraging the full potential of cloud
technology.
```

#### In the server room:

```
On-Premises refers to traditional IT infrastructure
where organizations host their servers and data
within their own facilities.
This model requires significant upfront investments
in hardware and software, as well as ongoing
maintenance and support costs.
While it offers complete control over resources and
security, it can be inflexible and may not scale
efficiently as business needs change.
Organizations often find it challenging to keep up
with technological advancements due to the
limitations of on-premises systems.
```
### Cloud computing


#### IaaS:

```
Infrastructure as a Service (IaaS) is a cloud service
model that provides virtualized computing
resources over the internet.
With IaaS, businesses can rent servers, storage, and
networking capabilities on a pay-as-you-go basis.
This flexibility allows organizations to quickly scale
resources up or down according to demand without
the need for physical hardware investments.
IaaS is ideal for startups and companies with
fluctuating workloads, as it alleviates the burden of
managing physical infrastructure while providing
reliable performance.
```
### Cloud computing


#### CaaS:

```
Container as a Service (CaaS) is a container
management service that simplifies the
deployment and management of containerized
applications.
It allows developers to run applications in isolated
environments, making it easier to develop, test, and
deploy software.
CaaS provides a layer of abstraction over
infrastructure, enabling organizations to efficiently
manage container orchestration platforms like
Kubernetes.
This model is particularly beneficial for
organizations embracing microservices architecture,
as it enhances application portability and scalability.
```
### Cloud computing


#### PaaS:

```
Platform as a Service (PaaS) offers a
comprehensive environment for developers to
build, test, and deploy applications without
managing the underlying infrastructure.
PaaS provides a suite of tools and services, such as
development frameworks, databases, and
middleware, allowing developers to focus on coding
and application functionality.
This model accelerates the development lifecycle
and fosters collaboration among teams, making it
easier to innovate and deliver high-quality
applications.
PaaS is particularly advantageous for organizations
seeking to streamline their software development
processes.
```
### Cloud computing


#### FaaS:

```
Function as a Service (FaaS) is an event-driven
cloud computing model that enables developers to
run individual functions or pieces of code in
response to specific events.
This serverless architecture eliminates the need to
manage servers, allowing developers to focus solely
on writing and deploying code.
FaaS automatically scales based on the number of
requests, ensuring optimal resource utilization and
cost-effectiveness.
This model is ideal for applications with variable
workloads, as it simplifies the process of building
and deploying microservices and event-driven
applications.
```
### Cloud computing


#### SaaS:

```
Software as a Service (SaaS) is perhaps the most
widely recognized cloud service model, delivering
software applications over the internet.
Users can access SaaS applications via a web
browser, eliminating the need for installations or
updates on local devices.
This model offers various benefits, including
automatic updates, scalability, and reduced IT
overhead.
SaaS is ideal for businesses looking to streamline
operations, as it provides access to a wide range of
applications, from productivity tools to customer
relationship management systems, all on a
subscription basis.
```
### Cloud computing


#### Advantages:

```
Organizations choose cloud solutions over on-
premises servers for several key reasons: cost
efficiency through a pay-as-you-go model,
scalability to accommodate fluctuating workloads,
and enhanced accessibility that facilitates remote
collaboration. Cloud services also relieve internal IT
teams of the burden of maintenance and updates ,
ensuring access to the latest technology.
Additionally, many cloud providers offer robust
security measures and compliance certifications,
along with built-in disaster recovery and backup
options , enhancing business continuity.
Overall, cloud computing enables organizations to
focus on core business functions and innovation
while benefiting from increased agility and
efficiency.
```
### Cloud computing


#### Disadvantages:

```
Cloud computing also has notable disadvantages.
Security concerns arise from storing sensitive data
off-site , and reliance on internet connectivity
means any downtime can disrupt access to
applications. Organizations may face limited control
and customization options compared to on-
premises solutions, and subscription costs can
accumulate over time, potentially surpassing the
expenses of owning servers.
Additionally, vendor lock-in can complicate
migration between providers, limiting flexibility ,
and navigating regulatory compliance may be more
challenging in the cloud, especially for industries
with strict data handling requirements. Weighing
these drawbacks is essential for organizations
considering cloud adoption.
```
### Cloud computing


### Cloud computing


#### Key players:

```
Key players in cloud computing include major
service providers like Amazon Web Services (AWS),
Microsoft Azure , and Google Cloud Platform (GCP),
which dominate the market with a wide range of
services and global infrastructure.
Other notable companies include IBM , Oracle , and
Alibaba Cloud , each offering specialized solutions
for various business needs.
Additionally, smaller players like DigitalOcean and
Linode cater to niche markets, while companies like
Salesforce and Dropbox focus on specific
applications in the cloud ecosystem.
Together, these players drive innovation and
competition in the rapidly evolving cloud
landscape.
```
### Cloud computing


### Activity

Do the Cloud assignment found on

Brightspace in week 7.


### Artificial Intelligence

#### Core

#### Principles

#### Historical

#### Development

#### Everyday Life Ethics


### Artificial Intelligence

#### Core Principles:

```
Artificial Intelligence (AI) refers to the simulation of
human intelligence in machines designed to think
and act like humans.
```
```
It encompasses a range of technologies and
methodologies that enable computers to perform
tasks traditionally requiring human cognition, such
as problem-solving, understanding natural
language, and recognizing patterns.
```
```
At its core, AI relies on algorithms and data,
allowing machines to learn from experiences, adapt
to new inputs, and carry out functions
autonomously.
```

#### Historical Development:

```
The evolution of AI can be traced back to the mid-
20 th century when pioneers like Alan Turing and
John McCarthy laid the groundwork for the field.
```
```
Initially, AI research focused on symbolic
approaches, where rules and logic defined how
machines should behave.
```
```
Over time, the development of machine learning—
particularly deep learning—revolutionized the field
by enabling systems to learn directly from vast
amounts of data.
```
```
This shift has led to significant advancements in
areas such as computer vision, speech recognition,
and natural language processing.
```
### Artificial Intelligence


#### AI in Everyday Life:

```
AI is increasingly integrated into various aspects of
daily life, transforming industries such as
healthcare, finance, transportation, and
entertainment.
```
```
In healthcare, AI systems analyze medical images
and assist in diagnostics, while in finance, they
detect fraudulent activities and automate trading.
```
```
Autonomous vehicles leverage AI to navigate safely,
and recommendation systems personalize user
experiences on streaming platforms and
e-commerce sites.
```
```
These applications highlight AI's potential to
enhance efficiency and decision-making.
```
### Artificial Intelligence


#### Ethical Considerations:

```
However, the rapid advancement of AI raises
important ethical and societal questions. Concerns
about data privacy, job displacement due to
automation, and the potential for biased algorithms
necessitate careful consideration and regulation.
```
```
As AI continues to evolve, it is crucial to foster a
balanced dialogue around its benefits and risks,
ensuring that technological progress aligns with
societal values and enhances the quality of life for
all.
```
### Artificial Intelligence


##### Key players – Tech giants:

```
The landscape of artificial intelligence (AI) features
key players across various sectors, including major
tech companies, innovative startups, research
institutions, and government bodies. Tech giants
like Google , Microsoft , Amazon , IBM , and
Facebook (Meta) lead the way with substantial
investments in AI research and applications.
Microsoft notably strengthened its position by
acquiring OpenAI , which focuses on advanced areas
like natural language processing and robotics.
NVIDIA plays a crucial role by providing powerful
GPUs that enable efficient AI processing, making it
a key player in the development of AI technologies.
Academic institutions such as Stanford and MIT
also contribute significantly to AI advancements
through cutting-edge research.
```
### Artificial Intelligence


##### Key players - Governments:

```
Governments play a crucial role in the AI landscape
by investing in research and development to drive
economic growth and innovation. They are
increasingly aware of AI's transformative potential
and are establishing national strategies to promote
its advancement while addressing ethical concerns.
Regulatory bodies, such as the European
Commission and the U.S. National Institute of
Standards and Technology (NIST), are working on
frameworks to ensure responsible AI development,
tackling issues like data privacy, algorithmic bias,
and job displacement due to automation.
By fostering collaboration between industry,
academia, and the public sector, governments seek
to harness AI's benefits while mitigating risks and
ensuring alignment with societal values.
```
### Artificial Intelligence


### Activity

Do some research:

Investigate how AI can affect your own

personal life.

Make groups of two or three people and

discuss the results.


### Quantum computing

#### Basics Potential

#### Technical

#### Challenges

#### Future


### Quantum computing

#### The Basics:

```
Quantum computing represents a groundbreaking
shift in computing technology, leveraging the
principles of quantum mechanics to process
information in fundamentally different ways than
classical computers.
At its core, quantum computing harnesses the
power of quantum bits, or qubits, which can exist in
multiple states simultaneously, thanks to the
phenomena of superposition and entanglement.
This allows quantum computers to perform
complex calculations at speeds unattainable by
traditional computers, making them a promising
solution for tackling problems in various fields, such
as cryptography, materials science, and artificial
intelligence.
```

#### The Potential:

```
As a futuristic computer design, quantum
computing holds the potential to revolutionize
industries by solving problems that are currently
intractable for classical computers.
For instance, tasks like optimizing large logistics
networks, simulating molecular interactions in drug
development, and breaking complex encryption
codes could be handled with unprecedented
efficiency.
This capability could lead to breakthroughs in fields
ranging from pharmaceuticals to finance, where
speed and accuracy are critical.
```
### Quantum computing


#### Technical Challenges:

```
However, quantum computing is still in its early
stages of development. Building practical quantum
computers presents significant technical challenges,
including maintaining qubit stability and minimizing
error rates caused by decoherence.
Researchers are exploring various approaches to
create robust quantum systems, such as
superconducting qubits, trapped ions, and
topological qubits.
As advancements are made, the quest for a
scalable, fault-tolerant quantum computer
continues to drive innovation in both hardware and
software.
```
### Quantum computing


#### The Future:

```
Despite the current limitations, the future of
quantum computing is filled with promise. As
researchers and technologists work to overcome
existing challenges, we can expect to see more
accessible quantum computing platforms emerge,
enabling a wider range of organizations to
experiment with and benefit from this technology.
As quantum computers become more integrated
into the technological landscape, they will likely
change how we approach problem-solving,
fundamentally altering our understanding of
computation itself.
```
### Quantum computing


#### Key Players:

```
Several organizations are leading the development
of quantum computers, including IBM , Google , and
Microsoft , each making significant contributions
through research and cloud-based platforms. IBM
offers the IBM Quantum Experience , while Google
achieved "quantum supremacy" with its Sycamore
processor. D-Wave Systems specializes in quantum
annealing, Rigetti Computing focuses on quantum
processors, and IonQ develops trapped-ion
quantum systems. Honeywell Quantum Solutions
emphasizes high-fidelity qubits, and many
universities like MIT and Caltech engage in
advanced quantum research, often collaborating
with industry. Together, these entities are driving
rapid advancements in quantum computing
technology.
```
### Quantum computing


### Activity

Do some research:

Investigate why quantum computing

poses a potential threat to today’s

security systems.

Make groups of two or three people and

discuss the results.


### The assignment

#### Web apps

#### Native apps

#### VMs

#### Containers

#### Emulation

#### Cloud

#### computing

#### Quantum

#### computing


- Do the practical assignments of

week 7 found on Brightspace

### The Assignment


- Read chapter 13 of the book

### Homework


```
Do your homework !!!
```
```
Read the book !!!
```
### See you next week

Next week’s topics include:

- Completing the assignments
- Q&A


### Study for the Exam


