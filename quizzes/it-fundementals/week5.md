## IT Fundamentals

##### How a computer works

##### Week 5:

##### Operating systems


# Agenda


# Agenda

## Agenda

- OS overview
- Kernel mode & User mode
- Processes & Threads
- Virtual memory
- Filesystems
- Shell
- The assignment


### Operating systems overview

#### NO OS Kernel Device drivers

#### Windows

#### Unix-like


### No operating system

#### Operating system?

```
Programming for early computers and gaming
consoles is fundamentally different from modern
software development. In the early days, systems
typically lacked operating systems, meaning
developers worked directly with the hardware
through machine or assembly languages. This
approach required intimate knowledge of the
system’s architecture, such as the processor,
memory layout, I/O devices, and display hardware.
The process was highly manual, where
programmers had to handle tasks like memory
management, graphics rendering, and input
handling all on their own. Tools were limited, and
most debugging had to be done with hardware-
level inspection, as there were few high-level
abstractions or robust development environments.
```

#### No operating system:

```
One prime example of this is programming for the
Nintendo Entertainment System (NES). As an 8 - bit
console without an operating system, developers
directly interacted with the NES hardware through
6502 assembly language, managing tasks like
controlling the Picture Processing Unit (PPU) for
graphics, the Audio Processing Unit (APU) for
sound, and handling input from controllers. Games
were built to fit within strict memory constraints
and took advantage of the console’s tile-based
graphics and limited sprite capabilities. NES
programming involved deep knowledge of the
hardware, and developers relied on specialized
tools like assemblers, tile editors, and emulators to
create and test their games. This made NES
development challenging yet rewarding, driving
developers to innovate within the console's limits.
```
Game data in ROM

### No operating system


#### No operating system:

```
The NES, powered by a modified 6502 CPU
(Ricoh 2 A 03 ), features a PPU for graphics, an APU
for sound, and 2 KB of internal RAM, relying on
cartridges to run games. These cartridges store
game data in ROM (Read-Only Memory) as binary
code, which consists of machine instructions
specifically designed for the NES's CPU.
During development, this code is initially written in
assembly language and then assembled into a
sequence of 1 s and 0 s that the CPU can directly
execute. When a cartridge is inserted, the NES
reads this binary code from the ROM and begins
executing the instructions. The ROM is non-volatile,
ensuring that the game code is retained even when
the power is off, making the game accessible
whenever the cartridge is loaded.
```
### No operating system


```
5.Timing and Scheduling : Developers need to create their
own timing mechanisms to manage game loops, frame
rates, and event scheduling, ensuring smooth gameplay
without built-in timing functions from an OS.
6.File Handling : For systems with storage, developers must
implement file handling routines to read from and write to
external storage, as there are no standard file I/O libraries.
7.Error Handling : Developers must devise their own
methods for detecting and responding to errors since there
are no OS-level error handling mechanisms or debugging
tools readily available.
8.Peripheral Communication : Any interaction with
external devices (like printers or modems) requires
developers to manage communication protocols and data
transfers manually.
By managing these tasks directly, developers gain fine-
grained control over the system, but it also increases the
complexity and effort required to build software for such
environments.
```
In a system **without an operating system** , developers must
handle several typical tasks manually that would usually be
managed by an OS. These tasks include:
**1.Memory Management** : Developers must allocate,
manage, and free memory manually, including setting up
and using stack and heap areas, since there’s no automatic
memory allocation or garbage collection.
**2.Input Handling** : Managing input from devices like
controllers or keyboards requires developers to directly
read from hardware registers, interpret signals, and create
a polling mechanism to check for user input.
**3.Graphics Rendering** : Developers are responsible for
managing graphics output by directly interfacing with the
graphics hardware, including setting up and manipulating
tiles, sprites, and the display buffer.
**4.Sound Management** : Without an OS, developers must
program the sound hardware directly, controlling audio
channels and managing sound effects and music playback
through specific hardware registers.

### No operating system


#### OS is Software:

```
An operating system (OS) is software that manages
a computer's hardware and provides services for
running applications. It acts as an intermediary
between users, applications, and the hardware,
ensuring that resources like the CPU, memory, and
storage are allocated efficiently.
The OS handles tasks such as managing files,
controlling input and output devices, running
applications, and enforcing security protocols.
Common examples of operating systems include
Windows , macOS , Linux , and Android. In essence,
the OS is responsible for the overall functionality,
stability, and usability of a computer system.
```
### Operating system


#### Kernel:

```
The kernel is the core of an operating system,
responsible for managing critical system resources
like the CPU, memory, and hardware devices. It
serves as the bridge between software applications
and the hardware, ensuring that processes are
efficiently scheduled, memory is allocated and
managed properly, and devices like disks and
printers are accessed securely.
The kernel also controls the file system and
enforces security by isolating processes and
managing permissions to protect system stability
and data integrity. Essentially, it enables
communication between hardware and software
while ensuring the system runs efficiently and
securely.
```
### Operating system


#### Kernel and device drivers:

```
The kernel and device drivers work together to
enable communication between software and
hardware in an operating system. The kernel
manages system resources like the CPU and
memory, while device drivers act as specialized
software that translates the kernel's instructions
into commands that specific hardware devices can
understand.
When an application needs to interact with a
device, the kernel passes the request to the
appropriate driver, which handles communication
with the hardware. This relationship allows the OS
to support a variety of devices without modifying
the kernel, ensuring flexibility and efficient
hardware management.
```
### Operating system


#### OS Families:

```
Operating systems are the foundational software
that manage a computer's hardware and provide a
platform for applications to run. Among the various
types of operating systems, two major families
dominate the landscape: UNIX-like systems and
Windows. These families represent different
approaches to how operating systems manage
resources, provide user interfaces, and support
various types of applications. While UNIX-like
systems are renowned for their stability , security ,
and command-line power, Windows is widely
recognized for its user-friendly interface and broad
software compatibility , especially in personal and
business computing environments. Both families
play a critical role in the modern computing world,
catering to different user needs and industries.
```
### Operating system


#### Unix-like:

```
This family includes operating systems that are
based on or inspired by the original UNIX system.
Examples include Linux, macOS, and various BSD
systems. UNIX-like systems are known for their
stability, security, and powerful command-line
interfaces. They are widely used in servers,
supercomputers, and embedded systems, as well as
on personal computers.
These systems follow the POSIX standard, ensuring
compatibility between different UNIX-like operating
systems. Linux, for instance, is an open-source OS
that powers many web servers, smartphones
(through Android), and desktop computers. macOS,
based on a variant of UNIX, is Apple's operating
system for its computers, known for its polished
graphical interface.
```
### Operating system


#### Windows:

```
Microsoft Windows is a family of operating systems
that dominates the desktop and personal
computing markets. It is known for its user-friendly
graphical interface, broad software compatibility,
and ease of use, making it popular with home users
and businesses.
Windows offers a wide range of versions, from
home editions to more specialized versions like
Windows Server for enterprise use. While primarily
focused on desktop use, Windows also has versions
for servers and embedded systems.
Unlike UNIX-like systems, Windows uses a
proprietary architecture and its own set of
standards.
```
### Operating system


### Activity

###### On your Ubuntu VM:

###### Find out what kernel version is used.

###### On your Windows VM:

###### Find out what kernel version is used.


### Kernel mode & User mode

#### Kernel mode User mode System calls

#### Security

#### Stability


### Kernel mode

#### Kernel mode:

###### Kernel mode is a privileged mode in an

###### operating system where the kernel has full

###### access to all system resources, including

###### hardware and memory. In this mode, the OS

###### can perform critical tasks like managing

###### hardware devices, controlling memory, and

###### handling CPU scheduling. Unlike user mode,

###### where applications run with limited access to

###### prevent interference with the system, kernel

###### mode allows unrestricted access to ensure

###### efficient system management. The ability to

###### switch between user mode and kernel mode

###### helps maintain stability and security, as only

###### trusted OS functions operate with full control.


### Kernel mode

#### Kernel mode:

###### Kernel mode is important because it provides

###### the operating system with full control over the

###### hardware and system resources, ensuring

###### efficient, secure, and stable management of

###### the computer.

###### In kernel mode, the OS can perform critical

###### functions such as managing memory,

###### scheduling CPU tasks, and controlling

###### hardware devices.

###### This unrestricted access allows the OS to

###### execute low-level tasks necessary for the

###### overall operation and coordination of

###### applications and hardware.


### Kernel mode

#### Kernel mode:

###### Kernel mode also plays a key role in system

###### security. By separating user mode (where

###### applications run) from kernel mode, the OS

###### can protect itself from crashes, accidental

###### interference, or malicious actions by limiting

###### what applications can access.

###### Only trusted code running in kernel mode has

###### full privileges, reducing the likelihood of

###### system instability or security vulnerabilities.

###### The controlled switch between user mode and

###### kernel mode ensures that the system operates

###### efficiently while maintaining robust protection

###### against errors or attacks.


#### User mode:

###### User mode is a restricted mode in an

###### operating system where applications run with

###### limited access to system resources, ensuring

###### stability and security. In this mode, programs

###### cannot directly interact with hardware or

###### access critical system memory, relying instead

###### on system calls to request services from the

###### OS running in kernel mode. This separation

###### prevents applications from interfering with the

###### core system or other programs, reducing the

###### risk of crashes or security breaches. By

###### keeping most tasks in user mode, the OS

###### ensures that only trusted, privileged processes

###### in kernel mode have full control over the

###### system.

### User mode

Windows NT Architecture


#### User mode:

###### User mode is important because it provides a

###### layer of protection and stability for the

###### operating system by limiting the access that

###### applications have to critical system resources.

###### In user mode, applications are restricted from

###### directly interacting with hardware or accessing

###### system memory, which helps prevent

###### accidental or malicious actions from damaging

###### the system or interfering with other programs.

###### This separation of privileges reduces the risk

###### of system crashes, data corruption, and

###### security vulnerabilities.

### User mode

Windows NT Architecture


#### User mode:

###### By confining most tasks to user mode, the

###### operating system can manage resources more

###### securely, ensuring that only trusted processes

###### in kernel mode can access sensitive areas like

###### hardware drivers or system memory.

###### This division enhances overall system security

###### and stability while still allowing applications to

###### function effectively by making controlled

###### requests to the OS through system calls.

### User mode

Windows NT Architecture


#### System calls:

###### System calls serve as the primary interface

###### through which user programs request services

###### from the operating system's kernel. They

###### provide a controlled method for applications

###### to interact with the OS and access hardware

###### resources while operating in user mode.

###### When a program needs to perform actions

###### that require elevated privileges—such as

###### reading or writing files, managing memory, or

###### communicating with devices—it makes a

###### system call to request these services from the

###### kernel.

### System calls


#### System calls:

###### These calls are crucial for maintaining security

###### and stability within the system by enforcing

###### controlled access to system resources. By

###### using system calls, the operating system can

###### manage how applications access hardware

###### and other critical functions, preventing

###### accidental interference or malicious behavior.

###### This separation of user and kernel modes

###### ensures that only trusted code running in

###### kernel mode can directly interact with

###### hardware, while user applications operate

###### within defined boundaries.

### System calls


#### System calls:

###### System calls encompass various

###### functionalities, including file management

###### (creating, reading, writing, and deleting files),

###### process control (creating and managing

###### processes), memory management (allocating

###### and freeing memory), and device

###### management (interfacing with hardware).

###### Although making a system call involves

###### switching from user mode to kernel mode,

###### which incurs some overhead, this mechanism

###### is essential for maintaining the integrity and

###### security of the operating system, allowing

###### applications to function effectively without

###### compromising system stability.

### System calls


#### Security:

```
The security concept behind an operating system’s
use of user mode and kernel mode relies on
restricting access to critical system resources to
maintain stability and protect against unauthorized
actions. In kernel mode, the OS has full access to
hardware and memory, allowing it to manage
essential functions securely, while user mode limits
applications to a controlled environment.
Applications in user mode must request services
from the kernel, preventing them from directly
accessing hardware or sensitive areas, which
reduces the risk of system crashes, security
breaches, or unauthorized access. This separation
ensures that only trusted processes run in kernel
mode, enhancing overall system security and
reliability.
```
### Kernel mode & User mode


#### Kernel mode crash:

```
When an application or component in kernel mode
crashes, it often causes a system-wide failure due to
the kernel's direct control over critical resources like
hardware and memory.
This typically results in a kernel panic on UNIX-like
systems or a blue screen of death (BSOD) on
Windows. Since kernel mode crashes affect the
core functions of the operating system, the system
halts, and a reboot is usually required to restore
functionality.
During the crash, the system may generate error
logs or memory dumps for debugging, but the crash
impacts all processes and necessitates restarting
the system.
```
### Kernel mode & User mode


### Group activity

###### Make groups of two or three persons.

###### Answer the following questions:

1. What is the primary difference
between user mode and kernel mode in an
operating system?
2. Which types of processes typically
run in user mode, and what are some
examples of actions they perform?
3. What triggers a transition from user
mode to kernel mode during process
execution?
4. How does running in kernel mode
impact system stability and security
compared to user mode?


### Processes & Threads

#### Processes Threads threadingHyper-

#### Simultaneous

#### multi-

#### threading


### Processes & Threads

#### Processes:

###### A process is an independent program in

###### execution, including its code, data, and system

###### resources like memory and file handles. Each

###### process has its own allocated memory space

###### and operates independently of other

###### processes.

###### The operating system manages these

###### processes using a scheduling system to share

###### CPU time, which allows for multitasking.

###### Processes are isolated from each other,

###### meaning they cannot directly interfere with

###### one another's memory, which helps maintain

###### security and system stability.


#### Threads:

###### A thread is the smallest unit of execution

###### within a process. While a process may contain

###### multiple threads, all threads within the same

###### process share the same memory and

###### resources. This allows threads to communicate

###### more easily with one another compared to

###### processes, which makes them lightweight and

###### more efficient for certain types of tasks, like

###### handling multiple tasks simultaneously within

###### a single application (e.g., a web browser

###### loading multiple tabs). Threads can be thought

###### of as "subtasks" of a process that run

###### concurrently, and they are scheduled by the

###### OS much like processes.

### Processes & Threads


#### Key Differences:

```
Isolation: Processes are isolated from each other
with separate memory spaces, while threads within
the same process share memory and resources.
Overhead: Creating and managing processes
requires more overhead compared to threads,
which are lighter since they operate within the
same process environment.
Use Cases: Processes are typically used for
separate, independent applications, while threads
are used to divide tasks within a single application
for improved performance and concurrency.
Processes provide isolation and resource
management for programs, while threads allow for
concurrent execution within a process, making both
essential components of multitasking in modern
operating systems.
```
### Processes & Threads


#### How many threads?

###### A single processor core can execute only one

###### thread at a time in a traditional sense.

###### However, many modern processors support

###### simultaneous multithreading (SMT),

###### commonly known as Hyper-Threading in Intel

###### processors.

###### With SMT, a single core can manage two

###### threads simultaneously by sharing resources,

###### allowing for better utilization of the core's

###### execution units.

###### Without SMT, one core executes one thread at

###### a time. With SMT, one core can handle two

###### threads simultaneously.

### Processes & Threads


### Activity

###### Assignment 1:

###### Make screenshots of your Windows VM:

- How many processes are running after

###### a reboot?

- How much memory is being utilized?
- TIP: Use Task Manager

###### Assignment 2:

###### Make screenshots of your Ubuntu VM:

- How many processes are running after

###### a reboot?

- How much memory is being utilized?
- TIP: Use htop


### Virtual memory

#### Memory

#### management Processes Threads Crashes


### Virtual memory

#### Memory management:

```
Virtual memory is a memory management
technique used by operating systems to give
applications the illusion of having more memory
than is physically available on the system. It does
this by using both RAM (physical memory) and a
section of the hard drive or SSD, called the swap
space or page file, to extend the available memory.
When an application requests more memory than
the system’s physical RAM can provide, the OS
swaps less-used data from RAM to the hard drive,
freeing up RAM for more immediate tasks. This
allows the system to run larger applications or
multiple applications simultaneously without
running out of memory, even if physical RAM is
limited.
```

#### Isolation:

```
Virtual memory also provides isolation between
processes by assigning each process its own virtual
address space, preventing them from interfering
with one another. This improves security and
stability, as processes cannot directly access each
other's memory.
The OS manages virtual memory through a system
of paging, where memory is divided into fixed-size
blocks called pages, and only the most frequently
accessed pages are kept in physical RAM. This way,
virtual memory optimizes resource use, allows for
multitasking, and ensures that applications run
smoothly, even with limited physical memory.
```
### Virtual memory


#### Application crash:

###### When an application running in user mode

###### crashes, the operating system safely

###### terminates the process and cleans up its

###### associated virtual memory without affecting

###### other processes or system stability. The OS

###### releases the memory that was allocated to the

###### crashed application, including both physical

###### RAM and any data in the virtual memory

###### (swap space or page file), making these

###### resources available for other processes.

###### Since user mode processes are isolated, the

###### crash only impacts the faulty application,

###### allowing the system to continue functioning

###### normally.

### Virtual memory


#### Address space:

###### A 32 - bit operating system has a total

###### addressable memory space of 4 GB, even if it

###### has only 1 GB of physical RAM installed. This

###### space is typically divided into 2 GB for user

###### applications and 2 GB for the kernel and

###### system processes.

###### The OS uses virtual memory to extend its

###### memory usage beyond physical limits,

###### allowing multiple processes to run

###### concurrently without interference. Techniques

###### like paging enable efficient management of

###### memory, ensuring that each process operates

###### within its own virtual address space while the

###### system manages the mapping to physical

###### memory.

### Virtual memory


### Activity

###### Calculate the address space for a 16-bit

###### operating system:

###### How many different addresses are there?

###### How large is the addressable memory

###### in kilobytes?


### Filesystems

#### Manage data filesystemsWindows filesystemsLinux structuresDirectory


### Filesystems

#### Manage data:

```
A filesystem is a method and structure used by an
operating system to manage and organize data
stored on storage devices such as hard drives , SSDs ,
and USB drives. It defines how data is named,
stored, retrieved, and organized, providing a
hierarchical structure of directories and files that
allows users and applications to easily access and
manipulate data.
Filesystems handle essential functions like file
creation, deletion, reading, and writing while also
managing metadata associated with files, such as
permissions, timestamps, and file types. Different
types of filesystems, such as NTFS , FAT 32 , ext 4 , and
HFS+ , offer varying features, performance levels,
and compatibility, allowing users to choose the best
filesystem for their specific needs.
```

#### Windows filesystems:

```
Filesystems in Windows and Linux differ
significantly in terms of structure, features, and
compatibility, reflecting the distinct design
philosophies of each operating system.
In Windows, the most commonly used filesystem is
NTFS (New Technology File System), which supports
advanced features like file permissions, encryption,
journaling, and large file sizes. NTFS allows for
complex metadata management and is optimized
for performance on large volumes.
Older Windows systems may also use FAT 32 (File
Allocation Table 32 ), which is simpler but has
limitations such as a maximum file size of 4 GB and
less efficient handling of large drives.
```
### Filesystems


#### Windows directories:

###### The directory structures in Windows and Linux

###### differ significantly in their organization and

###### navigation methods.

###### Windows utilizes a drive-letter-based system,

###### where each storage device is assigned a letter

###### (e.g., C:, D:) and users navigate through these

###### drives to access their data.

###### The paths in Windows use backslashes \ as

###### separators, and the system relies heavily on

###### file extensions (like .exe, .txt, and .docx) to

###### identify file types and associated applications.

###### User profiles are stored under

###### C:\Users\Username, where personal files and

###### application data are organized.

### Filesystems


#### Linux filesystems:

```
In contrast, Linux supports several filesystems, with
ext 4 (Fourth Extended Filesystem) being the most
prevalent. ext 4 offers similar features to NTFS,
including journaling, support for large files, and
advanced data integrity checks.
Additionally, Linux can utilize other filesystems like
XFS, Btrfs, and ReiserFS, each providing unique
advantages such as better performance, snapshot
capabilities, and dynamic volume management.
Unlike NTFS, Linux filesystems are typically case-
sensitive, which can affect file naming conventions.
Overall, the differences in filesystems between
Windows and Linux reflect their respective goals
regarding performance, data integrity, and
compatibility across various hardware and software
environments.
```
### Filesystems


#### Linux directories:

###### In contrast, Linux features a unified root

###### directory structure where all files stem from

###### the root directory /. This organization employs

###### forward slashes / as separators and follows a

###### well-defined hierarchy of standard directories,

###### such as /bin, /etc, /home, and /usr, making it

###### easier to manage system components.

###### Linux also enforces case sensitivity in file and

###### directory names, treating File.txt and file.txt as

###### distinct files, while Windows is generally case-

###### insensitive. These structural differences

###### impact how users interact with files and

###### applications, reflecting the distinct design

###### philosophies of both operating systems.

### Filesystems


### Activity

###### Find out:

###### On your Ubuntu VM:

###### How much free disk space do you have?

###### On your Windows VM:

###### How much free disk space do you have?


### Shell

#### Command

#### Line Interface

#### Graphical

#### Shell

#### BASH

#### CMD

#### PowerShell

#### Scripting


### Shell

#### What is a Shell:

```
A shell in an operating system is a user interface
that allows interaction between the user and the
system’s kernel, which manages hardware and
system resources. It interprets and executes user
commands, serving as a bridge between the user
and the core functionalities of the operating
system. There are two main types of shells:
command-line shells, and graphical shells.
The shell is responsible for executing programs,
managing files, and controlling system processes.
Through the shell, users can perform tasks such as
navigating the file system, running applications, and
configuring system settings.
The shell plays a crucial role in enabling users to
control and manage the operating system
effectively.
```

### Shell

#### Terminal:

```
A command-line interface (CLI) shell is a text-based
interface that allows users to interact with the
operating system by typing commands. It interprets
the text input, passes it to the operating system’s
kernel, and displays the output.
Common CLI shells include Bash in Unix/Linux
systems and Command Prompt or PowerShell in
Windows. These shells are efficient for executing
tasks such as file manipulation, running programs,
and configuring system settings, especially for
experienced users or system administrators.
The CLI provides powerful control over the system
with commands that can be combined into scripts
for automation, making it highly flexible and
customizable.
```
Windows: Command Prompt

Linux: Bash


#### Graphical Shell:

```
A graphical shell, on the other hand, provides a
visual interface for interacting with the operating
system. Users interact with elements like windows,
icons, and menus to perform tasks such as opening
applications, managing files, and adjusting settings.
Examples include Windows Explorer on Windows
and desktop environments like GNOME or KDE on
Linux. Graphical shells are designed to be more
user-friendly, especially for those unfamiliar with
command-line syntax, offering intuitive system
control with point-and-click actions.
They prioritize ease of use over the deep control
and scripting capabilities of CLI shells, but both
types of shells serve the same fundamental
purpose: enabling users to interact with the
operating system.
```
### Shell


### Activity

###### Do the CLI assignment found on

###### Brightspace in week 5.


### The assignment

#### Operating

#### systems Kernel

#### Kernel mode

#### User mode

#### Shell


- Do the practical assignments of

###### week 5 found on Brightspace

### The Assignment


- Read chapter 10 of the book

### Homework


###### Next week’s topics include:

- Networking
- The internet
- World Wide Web
- Web Servers

```
Do your homework !!!
Read the book !!!
```
### See you next week


