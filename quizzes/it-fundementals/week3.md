## IT Fundamentals

##### How a computer works

##### Week 3:

##### Hardware


# Agenda


# Agenda

## Agenda

- Von Neumann architecture
- Adders
- Processor
- Memory
- System bus
- The assignment


### Von Neumann architecture

#### CPU Fetch/decode/execute Input/output bottleneck


### Von Neumann architecture

#### Computer design model:

###### John von Neumann ( 1903 - 1957 ) was a

###### Hungarian-American mathematician, physicist,

###### and computer scientist known for his pivotal

###### contributions across various fields, including

###### mathematics, quantum mechanics, game

###### theory, and computer science.

###### He is most famous for the Von Neumann

###### architecture , which describes a computer

###### design model that uses a single memory space

###### for instructions and data, serving as the

###### foundation for most modern computers. In

###### addition to his theoretical work, von Neumann

###### played a key role in the Manhattan Project.


### Von Neumann architecture

#### Computer design model:

###### The Von Neumann architecture is a

###### foundational computer design model

###### proposed by John von Neumann in the 1940 s,

###### characterized by a single memory space that

###### stores both data and instructions.

###### It consists of a Central Processing Unit (CPU),

###### which includes a Control Unit (CU) to fetch and

###### decode instructions, and an Arithmetic Logic

###### Unit (ALU) to perform calculations and logic

###### operations.


### Von Neumann architecture

#### Computer design model:

###### The architecture follows a sequential

###### execution cycle known as fetch-decode-

###### execute , and it connects to input/output

###### devices through a bus system for interaction

###### with the external world.

###### While its simplicity and practicality have

###### greatly influenced modern computing, it also

###### suffers from the Von Neumann bottleneck ,

###### which limits data transfer speeds between the

###### CPU and memory.


### Von Neumann architecture

##### Fetch-decode-execute cycle:

Thewhich **fetch** a CPU **- decode** in **-** the **execute** Von (^) **cycle** Neumann is the architectureprocess by (^)
operates.
In the **fetch** stage, the CPU retrieves an instruction
from memory using the **program counter***.
During **decode** , the Control Unit interprets the
instruction to determine the required operation.
Finally,specified in theoperation, **execute** such stage, as the arithmetic, CPU performs memory the (^)
access, or control flow adjustments. This cycle
repeatsinstructions continuously, sequentially enabling and executethe CPU tasksto process in a (^)
program.
***** holds A **program** the memory **counter** address **(PC)** isof athe register next instructionin the CPU to that be (^)
executedinstruction into (^) ensurea program, sequential incrementing processing. after each


### Von Neumann architecture

#### Modern computers:

###### The Von Neumann architecture is essential to

###### modern personal computers (PCs), using a

###### unified memory structure that stores both

###### program instructions and data in the same

###### space for efficient processing.

###### Current CPUs are designed with components

###### like the Control Unit (CU) and Arithmetic Logic

###### Unit (ALU) and operate using the fetch-

###### decode-execute cycle. Input and output

###### management aligns with this model, enabling

###### user interaction through various devices.


### Von Neumann architecture

#### Modern computers:

###### The Von Neumann bottleneck , caused by

###### limited data transfer speeds between the CPU

###### and memory, is a significant design

###### consideration, leading to the use of cache

###### memory and multi-core processors to

###### enhance performance.

###### The principles of this architecture continue to

###### shape modern computing systems.


### Adders

#### Half adder Full adder 4 - bit adder evolutionLogisim


### Adders

#### Adding bits:

###### Bit adders are digital circuits that perform

###### binary addition, typically on individual or

###### multiple bits. They come in two main types:

###### half-adders , which add two single bits, and

###### full-adders , which add two bits plus a carry

###### from a previous addition.

###### These basic adders can be combined to create

###### multi-bit adders (e.g., 4 - bit, 8 - bit adders),

###### allowing larger binary numbers to be added.

###### Bit adders are essential building blocks for

###### digital arithmetic in computing systems.


### Adders

#### Adding bits:

###### In a processor , bit adders are a key

###### component of the Arithmetic Logic Unit (ALU),

###### which is responsible for performing arithmetic

###### and logical operations.

###### The ALU uses bit adders to execute addition

###### and subtraction operations, with subtraction

###### often handled by adding a number's two's

###### complement.

###### Bit adders enable the ALU to carry out these

###### fundamental arithmetic tasks, making them a

###### core part of the CPU's data processing

###### capabilities.


### Adders

#### Half-adder:

###### A half-adder is a simple digital circuit that

###### adds two single-bit binary numbers, producing

###### two outputs: sum (S) and carry (C). The sum is

###### calculated using an XOR gate, which outputs 1

###### if the two inputs are different. The carry is

###### determined using an AND gate, which outputs

###### 1 if both inputs are 1.

###### The half-adder can handle basic binary

###### addition but cannot account for a carry input

###### from previous stages, making it suitable for

###### adding only two bits at a time. For more

###### complex operations, a full-adder is required.


### Adders

##### Do you recognise the two half adders?


### Adders

#### Full-adder:

###### A full-adder is a digital circuit used to add

###### three single-bit binary numbers: two input bits

###### (A and B) and an additional carry-in bit from a

###### previous addition. It produces two outputs:

###### sum (S) and carry-out (C-out). The sum is

###### calculated using two XOR gates: first to add A

###### and B, then the result is XORed with the carry-

###### in. The carry-out is determined using a

###### combination of AND and OR gates: first to

###### check if any two inputs are 1 and then to

###### combine the results.

###### The full-adder allows multi-bit binary addition

###### by cascading with other full-adders.


### Adders


### Adders

#### 4 - bit adder:

###### A 4 - bit adder is a digital circuit that adds two

###### 4 - bit binary numbers and outputs a 4 - bit sum

###### along with a carry-out. It is typically built by

###### connecting four full-adders in sequence,

###### where the carry-out of each adder is passed as

###### the carry-in to the next adder. Each full-adder

###### handles the addition of corresponding bits

###### from the two numbers, plus any carry from

###### the previous stage. The first full-adder in the

###### chain receives an external carry-in (often 0 ),

###### and the final adder produces the overall carry-

###### out. This allows the 4 - bit adder to perform

###### binary addition for multi-bit numbers

###### efficiently.


### Logisim evolution

#### Designing circuits:

###### Logisim Evolution is an open-source graphical

###### tool used for designing and simulating digital

###### circuits, widely applied in education for

###### teaching digital logic, computer architecture,

###### and circuit design. It allows users to create and

###### test circuits interactively using components

###### like logic gates, flip-flops, memory, supporting

###### both combinational and sequential logic.

###### With its easy-to-use interface, modular design,

###### and real-time simulation capabilities, it's ideal

###### for students, educators, and researchers to

###### prototype and understand complex digital

###### systems without needing physical hardware.

#### DOWNLOAD

```
REQUIRED
```

- Download logisim and run it
- Double click on the JAR file to

###### start the application

- Requires JAVA 21 to run
- In logisim:
    - Design a half adder
    - With the half adder, build the

###### full adder

- With the full adder, build the

###### 4 - bit adder

### Activity


### Processor

#### Control unit Arithmetic logic unit Registers Cache


### Processor

#### Single core:

```
A single-core processor is composed of several
```
criticalinstructions components. The **Control** working **Unit** together (CU) manages to execute the (^)
fetching, decoding, and execution of instructions,
whilearithmetic the **Arithmetic** and logical **Logic** operations **Unit** (ALU). handlesData and all (^)
instructionssmall, high-speed are temporarilymemory units, stored reducing in **registers** the need, (^)
to fetch it from main memory.
A **clock** synchronizes the processor's actions,
ensuring tasks are performed in an orderly manner.
In a single-core processor, the core executes one
instruction at a time, but at very high speed.


### Processor

#### Multiple cores:

```
A multi-core processor is a single computing unit
thatunits, contains called "cores," two or withinmore independentone physical chipprocessing.
```
Eachin parallel core can with execute other instructions cores, allowing and process for more data (^)
efficientespecially multitasking in applications and that improved are designed performance, to take (^)
advantage of multiple threads. Frequently used
datareducing is storedthe need in to the fetch **cache** it from for main quick memory access,.
A single core in a multi-core processor can be
considered a processor on its own, as it contains
theinstructions, fundamental such (^) ascomponents an **Arithmetic** needed **Logic** (^) to **Unit** execute (ALU), (^)
**Control Unit** (CU), and **registers**.


### Processor

#### Control unit:

```
A Control Unit (CU) is a critical component of a
```
processorCPU and managesthat orchestrates the flow theof dataoperations between of thethe (^)
processor and other parts of the computer system.
Itand interprets generates the instructionscontrol signals fetched to from direct memory the (^)
operationregisters, ofand the other ALU (Arithmeticcomponents (^) .Logic The Unit), CU (^)
determines the sequence of execution for
instructions,correctly and (^) efficientlyensuring (^). that data is processed
By effectively controlling and synchronizing the
activities of the CPU, the Control Unit plays a vital
rolethat inthe ensuring processor that operates programs effectively run smoothly within andthe (^)
overall computer architecture.


### Processor

#### Arithmetic logic unit:

```
An Arithmetic Logic Unit (ALU) is a fundamental
```
componentperforming arithmeticof a processor and logical responsible operations foron (^)
data. It handles basic calculations such as addition,
subtraction,logical operations multiplication, like AND, andOR, division,and NOT as. The well ALU as (^)
takesaccording input to (^) thefrom specified registers, operation, processes and the outputs data (^)
the result back to a register or memory. It operates
underarchitecture the control(ISA), ofexecuting the CPU's instructions instruction thatset (^)
dictateperforming which operationsthese calculations to perform. (^) andBy efficiently logical (^)
comparisons, the ALU plays a crucial role in the
overallthe execution processing of complex capability programs of the and CPU, tasks enabling.


### Processor

#### Registers:

```
A register inside a processor is a small, fast storage
```
locationinstructions that for (^) quicktemporarily access holdsduring (^) processingdata and. (^)
Registers are critical for the CPU's operation, as
theyretrieving provide data the compared fastest means to other of storing forms andof (^)
memory,various purposes, such as cache including or RAM holding. They operands are used forfor (^)
arithmetic and logical operations, storing the
resultsmemory of addresses computations, during instructionand keeping execution track. of
By utilizing registers, the processor can perform
calculations and execute instructions more
efficiently,performance significantly. enhancing overall system


### Processor

#### Cache:

Lused 1 , L (^2) in, anda processor L 3 caches to are improve types dataof cache access memory speed (^)
andfrequently enhance accessed overall data performanceand instructions by closerstoring to (^)
the CPU cores.
**L 1 cache** is the smallest and fastest cache, typically
locatedquickest directlyaccess times, on the usually CPU around chip, (^) ait few offers cycles the.
**L** shared **2 cache** between is larger thancores L 1 in but multi slightly-core slower, processors, often (^)
providingdata and instructionsa larger storage that are capacity likely to to be holdreused more.
**L** shared **3 cache** among is even all larger cores and in aslower processor, than servingL 2 , typically as a (^)
lastmemory level (RAM) of cache. before accessing the main


### Processor

##### Instruction set architecture:

```
Instruction Set Architecture (ISA) defines the
instructions that a CPU can execute, serving as a
```
linkthe betweenoperations software the CPU and canhardware perform,. It specifieshow it (^)
accessesdata. Each memory, instruction and howin the it usesISA correspondsregisters to storeto a (^)
specific machine code representation, which is the
binary format understood by the CPU.
Differentsets of instructions ISAs, such asand **x** (^86) architectures and **ARM** , havetailored unique for (^)
various devices and applications, enabling
programmersutilizes the specific to write capabilities software of the that hardware effectively.


### Processor

##### CISC:

```
CISC (Complex Instruction Set Computer) is a
processor architecture designed to execute
```
complextasks, such instructions as memory that accesscan perform and arithmetic, multiple (^)
withinthe number a single of instructioninstructions. Thisneeded approach per program, reduces (^)
simplifying coding and making programs more
compactinstruction. CISC set andprocessors can handle feature memory a large,-to-memory varied (^)
operationsbecomes moredirectly complex,. However, and instructionsthe hardware take (^)
longer to execute compared to simpler
architecturesComputer). Intel’s like (^) **x** RISC **86 processors** (Reduced are Instruction a well-known Set (^)
example of CISC architecture.


### Processor

##### RISC:

```
RISC (Reduced Instruction Set Computer) is a
processor architecture designed around a small,
```
highlybe executed optimized very set ofquickly simple. instructionsUnlike CISC, that RISC can (^)
instructionsa basic arithmetic typically or performload/store a singleoperation, task, andsuch are as (^)
designed to be executed within one clock cycle.
Thisexecution simplicity and moreallows efficient for fasteruse of instructionpipelines, (^)
whereparallel (^). multipleRISC processors instructions rely on aresoftware processed to handle in (^)
complex tasks by combining multiple simple
instructionsthe overall .performance While this results is often in fasterlonger due programs, to the (^)
streamlinedwidely used (^) examplehardware of. RISC **ARM** architecture **processors**. are a


### Processor

##### Moore’s Law:

```
Moore's Law, coined by Intel co-founder Gordon
Moore in 1965 , predicts that the number of
```
transistorsapproximately on everya microchiptwo years, would leading double to (^)
exponentialreducing costs growth. This trend in computinghas held remarkably power while true (^)
for several decades, fueling rapid advancements in
technology,smartphones (^). However,from personal in recent (^) years,computers the pace toof (^)
transistorphysical and miniaturization technical limitations has (^) inslowed semiconductor due to (^)
manufacturing. While Moore's Law remains a
usefulis no longer historical as reliable, framework, though its innovationsstrict interpretation like new (^)
chipextend architectures its spirit in new and ways quantum. computing may


### Activity: CISC or RISC?

```
ZilogZ80
```
```
Motorola 68000
```
```
6502
```
```
x86
```
```
PowerPC
```
ARM


###### Investigate your hardware:

- Investigate your laptop and phone
    - Determine its processor
    - Determine its ISA

### Activity


### Memory

#### SR Latch

#### JK Flip Flop RAM ROM

#### Secondary

#### storage


### Memory

#### SR Latch:

```
An SR latch (Set-Reset latch) is a basic type of
```
sequentialstore **one** (^) logic **bit** (^) ofcircuit information used in (^) .digital It has electronics two stable to (^)
states. The SR latch is commonly implemented with
eitheras a basic **NOR gates** building or **NAND** block **gates** in flip and-flops is oftenand otherused (^)
memory devices.
The SR latch is a building block for RAM memory
circuitscomplex. Althougharrangements, modern the RAM fundamental typically (^) conceptuses more of (^)
anbasis SR for latch these—storing more complex one bit memory of data structures—forms the.


### Memory

#### JK Flip flops:

```
The main issue with an SR latch is that it can get
```
stuckthe Set in (S) an and invalid Reset state (R) .inputs This happens are turned when on (bothboth (^)
are 1 ).
**The JK flip-flop solves this problem in a few ways:
Toggles** (both are **Output** 1 ), instead **:** When of gettingboth inputs stuck, J theand JK K flip are-flop on (^)
toggles the output.
**Clock** signal, (^) **Control** which **:** (^) meansThe JK itflip only-flop changes works withits statea clock at (^)
specificsmoothly (^) .times. This keeps everything running
**Defined Outputs:** The JK flip-flop always has a clear
outputare no invalidfor every states combination like in the SR of latch inputs,. so there

##### J

##### K

###### Clock

##### Q

##### Q

```
Do you recognise the SR latch in this picture?
```

### Memory

#### RAM:

```
RAM (Random Access Memory) is a type of volatile
```
memorydata that usedis actively in computers being used to or temporarilyprocessed. Unlikestore (^)
**ROM** , which retains data even when powered off,
RAMoff, making loses itsit essentialcontents forwhen tasks the that power require is turned quick (^)
read and write access.
RAM allows for fast data retrieval and manipulation,
enablingprograms, the runCPU toapplications, efficiently access and and manageexecute (^)
multitasking.
There are different types of RAM, including **DRAM
(Dynamic** system memory, **RAM)** ,and which **SRAM** is (^) **(Static** commonly **RAM)** (^) ,used which for is (^)
faster and used for cache memory.


### Memory

#### ROM:

###### ROM (Read-Only Memory) is used to store

###### data that needs to be preserved (semi-)

###### permanently. It is commonly used for storing

###### firmware (such as BIOS/UEFI) that controls

###### basic hardware functions.

###### ROM is also found in older gaming consoles,

###### game cartridges used ROM chips to store

###### game data, ensuring the games were

###### unchangeable and readily available. Since

###### ROM is non-volatile, it ensures the reliable

###### operation of devices without requiring

###### frequent updates or changes.


### Memory

#### BIOS/UEFI:

###### BIOS (Basic Input/Output System) and UEFI

###### (Unified Extensible Firmware Interface) are

###### critical components of a computer's startup

###### process, serving as the interface between the

###### hardware and the operating system. They are

###### responsible for initializing and testing the

###### computer's hardware components, such as the

###### CPU, memory, and storage devices, during the

###### boot sequence, ensuring that everything is

###### functioning correctly before the operating

###### system loads. BIOS/UEFI also provides a set of

###### low-level routines that the operating system

###### can use to interact with the hardware,

###### facilitating essential functions like keyboard

###### input and disk access.


### Memory

#### Secondary storage:

```
Secondary storage refers to non-volatile storage
```
devicespowered that off, retainproviding data aeven permanent when a orcomputer long-term is (^)
means of data storage beyond the temporary
capacityprimary ofstorage, RAM (Random which Accessis fast Memory)and used. Unlike for (^)
immediatestorage is typicallydata access slower by but the offers CPU, much secondary larger (^)
capacities at a lower cost.
Common types of secondary storage include hard
diskdisks drives (like CDs(HDDs), and solidDVDs),-state and drives flash (SSDs), drives, optical all of (^)
which are used to store operating systems,
applications,actively in use files,. Secondary and other storage data is that essential are notfor (^)
data archiving and backup.


### Memory


### Activity

###### Investigate your hardware:

- Investigate your laptop and phone
- What is the size of...
    - ...its main memory
    - ...its secondary memory


### System bus

#### Control bus Address bus Data bus OutputInput


### System bus

#### Buses:

```
The system bus in a computer is a crucial
```
communicationlike the CPU, memory, pathway andthat input/outputconnects components devices, (^)
allowing them to exchange data, addresses, and
controllines: **data** signals **lines**. (^) ,It which comprises carry (^) thethree actual main data types being of (^)
transmittedaddresses indicating; **address** (^) where **lines** , whichdata shouldtransmit be memory read or (^)
written; and **control lines** , which manage
operationscomponents andby signalingcoordinate the typeactions of operationamong (^)
(e.g., reading or writing).
Together, these lines facilitate efficient
communicationcomputer, ensuring and accuratecoordination and effectivewithin datathe (^)
transfer throughout the system.


### System bus

#### Control bus:

```
The control bus is an essential component of a
```
computer'sbetween the architecture CPU and otherthat carriesparts ofcontrol the system, signals (^)
coordinating and managing the operations of the
computercommands. Itthat is dictateresponsible how (^) datafor transmittingshould be (^)
transferredaddresses should over the be accesseddata bus viaand the which address memory bus. (^)
Control signals include instructions for operations
suchenabling as readingor disabling from ordevices, writing and to memory,signaling (^)
interruptscomponents. Thework control together bus ensuresharmoniously that allby (^)
managing timing and the sequence of operations,
makingsynchronization it critical of forthe (^) computer'sthe proper variousfunctioning parts (^) .and


### System bus

#### Address bus:

```
The address bus is a vital component of a
```
computer'saddresses from architecture the CPU tothat other carries components, the memory such (^)
as memory and input/output devices. Unlike the
databus specifies bus, which the transferslocation inactual memory data, where the address data is (^)
toaddress be read bus, from measured or written in tobits,. The determines width of thethe (^)
maximum addressable memory space of the
systemaddress; (^) upfor to example, 4 GB of memory a 32 - bit. By addressenabling busthe (^) CPUcan (^)
tocomponents, communicate the specific address memory bus plays locations a critical to role other in (^)
ensuring that data is correctly routed to and from
thehierarchy appropriate. areas in the computer's memory


### System bus

#### Data bus:

```
The data bus is a crucial component of a
```
computer'stransferring (^) dataarchitecture, between the (^) CPU,responsible memory, (^) andfor (^)
other peripheral devices. It consists of a set of
parallelsimultaneously, wires or allowing lines that for (^) thecan efficientcarry multiple movement bits (^)
ofbus, data measured within (^) inthe bits system (such. asThe 8 , width 16 , 32 ,of or the 64 bits),data (^)
determines how much data can be transmitted at
oneperformance time, (^) anddirectly speed (^) ofimpacting data transfer the. Theoverall data (^)
busspecifies operates memory alongside locations) the and address control bus bus (which(which (^)
manages data transfers), collectively ensuring that
dataappropriate is accurately components routed in a timelyto and manner from. the


### System bus

##### Input/Output:

```
The system bus is essential for communication
between the CPU and input/output (I/O) devices in
```
ausing computer the address system bus. It tofacilitates specify the data target transfer device, by (^)
thecontrol data bus bus to to send transfer control the signals actual that data, dictate and thethe (^)
operation being performed, such as reading input
ordevices, writing like output keyboards,. This mice,interaction and printers,allows I/Oto (^)
effectivelytasks such communicateas user input with processing the CPU, andenabling file (^)
transfers. Thus, the system bus acts as the
backboneintegration forof dataI/O exchange,devices withinensuring the seamless overall (^)
computer architecture.


### System bus

##### Input/Output → read & write:

```
A computer reads or writes data to I/O devices
through a systematic process involving the system
```
busdevice,. When it first the sends CPU wantsthe device's to interact address with over an theI/O (^)
addressthe control bus bus. It tothen indicate generates whether control the operation signals via is (^)
a read or write. For a write operation, the CPU
placesdevice, the while data during on the a data read bus, operation, sending itthe to theI/O (^)
devicedata bus sends. Finally, the requestedthe I/O device data acknowledgesback through thethe (^)
operation's completion by sending a signal back to
thecommunication CPU. This structured between themethod CPU andallows various efficient I/O (^)
devices,display, and enabling user input tasks processing such as (^) .file saving, data


### Activity

###### Investigate your hardware:

- Investigate your laptop and phone
- What I/O connectivity does your

###### device have?

- Input options?
- Output options?


### The assignment

#### Adders Processors Memory System bus


- Do the practical assignments of

###### week 3 found on Brightspace

### The Assignment


- Read chapters 6 & 7 of the book

### Homework


###### Next week’s topics include:

- Software
- Assembly low level programming
- High level programming

```
Do your homework !!!
Read the book !!!
```
### See you next week


