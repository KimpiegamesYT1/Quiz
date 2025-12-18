IT Fundamentals
How a computer works
Week 4:
Software
Agenda
Agenda
Agenda

    ISA
    Machine code
    Assembly
    High level programming
    Portable code
    The assignment

Instruction Set Architecture (ISA)
Binary
Hex
Machine code
Assembly
Opcodes
Processor
family
Instruction Set Architecture
ISA:
The Instruction Set Architecture (ISA) is the
interface between a computer's hardware and
software, defining the set of instructions a
processor can execute. It specifies how the
CPU understands and processes commands,
and how data is accessed via addressing
modes.
The ISA determines how high-level
programming languages are translated into
machine code that the CPU can interpret, and
it also impacts performance, power efficiency,
and compatibility. Common ISAs include x 86
and ARM, each designed for different
computing needs.
Instruction Set Architecture
Opcodes:

In low-level programming, the Instruction Set
Architecture (ISA) defines the set of machine
instructions that a processor can execute, with
opcodes being a key component. The ISA specifies
the format of these instructions, including the
opcode—the part of the instruction that tells the
CPU what operation to perform, such as addition,
subtraction, or data movement.
Low-level programmers use opcodes to directly
control the hardware by writing assembly language
or machine code that the CPU can execute without
any intermediate translation. This allows
programmers to manipulate the processor's
registers, memory, and other hardware resources
efficiently, making it crucial for tasks like system
programming, and performance optimization.

Example:

ARM Instruction Set Architecture (ISA)

[Cond][00][I][Opcode][S][Rn] [Rd] [Operand2]

Binary:
1110 00 1 1101 0 0000 0000 000000001010

Hex:
E 3 A 0000 A

Condition: 1110 = always execute
Opcode: 1101 in assembly is MOV

Assembly code: MOV r 0 , # 10

Move decimal value 10 in register r 0
Instruction Set Architecture
Processor family:
Every processor family has its own Instruction
Set Architecture (ISA), which defines the
specific set of instructions, opcodes, and
features that the CPU can understand and
execute. Different processor families, such as
x 86 and ARM, have their own unique ISAs,
meaning that software written for one family
cannot run natively on another without
adaptation or emulation.
The ISA dictates how operations like
arithmetic, data transfer, and control flow are
encoded and processed, along with how
memory and registers are managed.

ARM

6502

PowerPC

x
Machine code
ISA
Binary
instructions
Hexadecimal Hex editor
Machine code
Binary instructions:

Machine code is the lowest-level programming
language that a computer's CPU can execute
directly. It consists of binary instructions (composed
of 1 s and 0 s) that correspond to specific operations,
such as arithmetic, data movement, and control
flow. Each instruction is made up of an opcode,
which tells the CPU what operation to perform, and
operands, which specify the data or memory
addresses to use. Machine code is processor-
specific.
While difficult for humans to read and write,
machine code is crucial because it directly controls
the hardware. Hexadecimal is used instead of
binary when programming in machine code
because it is more compact and human-readable.

Machine code
Hex editor:

With a hex editor, you can program in machine
code by directly entering the binary instructions
that a CPU understands. This requires a strong
knowledge of the processor's Instruction Set
Architecture (ISA) to manually translate assembly
instructions into their corresponding machine code.
In the hex editor, you input these hexadecimal
values, representing the machine code, byte by
byte.
After saving the file as a binary executable, the CPU
can run the code exactly as entered. Though this
method offers precise control over hardware, it is
complex, prone to errors, and demands a deep
understanding of low-level programming.
See the video on the next slide for an example.

Machine code
On your Ubuntu VM:
Write a simple program in c with nano
Save the source code as: simple.c
int main() {
int a = 5;
int b = 3;
int c = a + b;
return c;
}
Compile it:
gcc -o simple simple.c
Disassemble the binary:
objdump -d simple
Analyze the Machine Code.
Activity
Assembly
Registers Opcodes
Control flow
Branching
ARM
Assembly
Simulator
Assembly
ARM assembly:

ARM assembly is a low-level programming language
used to write instructions for ARM processors,
which are widely used in mobile devices,
embedded systems, and increasingly in servers.
ARM (Advanced RISC Machine) follows a Reduced
Instruction Set Computing (RISC) architecture,
meaning it uses a simpler, more efficient set of
instructions compared to Complex Instruction Set
Computing (CISC) architectures like x 86. ARM
assembly is known for its efficiency in power
consumption and performance, making it ideal for
battery-powered devices. Instructions in ARM
assembly control hardware directly, manipulating
registers, memory, and performing arithmetic
operations. Writing in ARM assembly gives precise
control over hardware, but it requires detailed
knowledge of the architecture.

Assembly
Registers:

A register is a small, high-speed storage location
within a CPU that holds data, instructions, or
addresses used for immediate processing during
program execution.

In ARM assembly, the processor has 16 general-
purpose and special-purpose registers. R 0 - R 12 are
general-purpose registers for data manipulation
and intermediate values, while R 13 (SP) is the Stack
Pointer, R 14 (LR) is the Link Register, and R 15 (PC) is
the Program Counter, controlling the flow of
execution. The CPSR (Current Program Status
Register) holds condition flags and processor state.
These registers are crucial for managing data,
memory, and execution flow efficiently in ARM's
RISC architecture.

Assembly
Opcodes:
In ARM assembly, opcodes are instructions
that direct the processor to perform specific
operations like arithmetic, data movement, or
branching. Common opcodes include ADD
(addition), MOV (data transfer), LDR/STR
(load/store), and B (branch). ARM uses a RISC
architecture, meaning opcodes are simple and
efficient, often executing in one clock cycle.
Conditional execution, such as BNE (branch if
not equal), allows efficient decision-making,
making ARM assembly well-suited for
performance and power efficiency.
▪ MOV [Rn], [value]
▪ ADD [Rn], [value], [value]
▪ SUB [Rn], [value], [value]
▪ MUL [Rn], [value], [value]
▪ CMP [Rn], [value]
▪ BEQ [Label]
▪ BNE [Label]
▪ B [Label]
Assembly
Opcodes:
ADD R 0 , R 0 , # 1
Will perform the following action:
R 0 = R 0 + 1
MUL R 1 , R 0 , R 0
Will perform the following action:
R 1 = R 0 × R 0
CMP R 1 , # 144
BEQ Exit
B Loop
Will perform the following action:
IF (R 1 == 144 ) { goto label Exit}
ELSE { goto label Loop }
Assembly
Branching:

In ARM assembly, branching is used to alter the
flow of program execution by jumping to different
sections of code, often based on conditions. Labels
act as named markers within the code, serving as
destinations for branch instructions.
The B instruction performs an unconditional jump
to a specified label, while conditional branching
instructions like BEQ (branch if equal) or BNE
(branch if not equal) allow jumps based on
conditions set by comparison instructions.
This enables the creation of loops, if-else
structures, and more complex control flows. Labels
and branching together help organize and manage
the execution sequence in ARM assembly
programs.

Assembly
Branching:
The B instruction is an abbreviation for
branch, it is a jump command to another piece
of code.
The instruction BEQ is the abbreviation for
branch if equal. So, jump to label Exit if the
value of register r 1 becomes equal to 144
(decimal value), see the CMP statement.
The instruction CMP is the abbreviation for
compare. It compares two values with each
other. As long as the comparison of the BEQ
statement is not true, the jump to label Loop
is performed.
Assembly
ARM assembly simulator:

The Oak ARM Assembly Simulator is a learning tool
designed to help users understand and practice
ARM assembly language by simulating an ARM
processor's behavior. It allows users to write and
execute ARM assembly code step-by-step, providing
a visual representation of how each instruction
affects the processor's registers and memory. Key
features include a register view that displays the
current state of the registers, memory access
visualization, and support for various ARM
instructions, such as arithmetic, logic, and control
flow operations. Overall, the Oak ARM Simulator
offers an interactive and user-friendly environment
for mastering low-level programming concepts.

https://wunkolo.github.io/OakSim/

Activity
Code in Assembly:
https://wunkolo.github.io/OakSim/

    Initialize two numbers in registers R0 and R1.
    Add the values in R0 and R1 and store the result in R2.
    Subtract R1 from R0 and store the result in R3.
    Compare the two results using the CMP instruction.
    Use a conditional branch (e.g., BEQ, BNE) to jump to a different
    part of the code if the results are equal or not.

Compiled Bytecode interpreted Scripting
High level programming
High level programming
Why?

High-level programming languages are preferred
over machine code and assembly because they are
more readable, easier to maintain, and abstract
away hardware complexities, allowing developers
to focus on solving problems without managing
low-level details.

They offer portability across different systems,
speeding up development with rich libraries and
tools, and reducing common errors through
features like memory management and strong type-
checking. High-level languages are easier to learn,
have extensive community support, and greatly
enhance productivity compared to the intricate,
non-portable, and time-consuming nature of
machine code or assembly.

High level programming
Compile or not to compile?

Compiled code , like in C, is directly translated into
machine code by a compiler, making it fast but
platform-dependent and requiring recompilation
for changes. Interpreted code , like Python, is
executed line-by-line by an interpreter at runtime,
offering platform independence and quick iteration
but slower performance. Bytecode , like in Java's
JVM (Java Virtual Machine), is an intermediate
representation of code, compiled from source code
and executed by a virtual machine, providing a
balance between portability and performance.
Scripting , like in Bash , refers to writing small
programs that automate tasks , often interpreted,
and is typically used for quick, high-level
automation or task orchestration rather than large-
scale applications.

High level programming
Compiled source code:
In a compiled language, the source code is
translated into machine code by a compiler,
which is then executed directly by the
computer's processor. This approach, used in
languages like C, C++, Rust, and Go, results in
faster execution since the code is optimized
for the hardware and doesn't require external
tools at runtime.
However, compiled code is platform-
dependent, making it less portable between
different systems, and the development cycle
is slower due to the need for recompilation
after every change.
High level programming
Source code to bytecode:

Bytecode is an intermediate form of code
generated after compiling the source code but
before execution by an interpreter or a virtual
machine (VM), such as the Java Virtual Machine
(JVM). Examples of languages that use bytecode
include Java, and C#.
The advantages of bytecode include platform
independence, allowing it to run on any system
with the appropriate VM, and typically faster
execution than line-by-line interpreted code,
though it is not as fast as machine code.
However, bytecode requires a virtual machine to
execute, making it unable to run directly on
hardware, and there is some performance
overhead compared to fully compiled languages.

High level programming
Interpreted source code:

In an interpreted language, the source code is
executed directly by an interpreter at runtime, with
the interpreter reading and executing instructions
line-by-line rather than precompiling the code into
machine language. Examples include Python,
JavaScript, Ruby, and PHP.
This method offers platform independence, as the
same code can run across systems without
modification, and a faster development cycle since
changes can be executed immediately without
recompilation.
However, interpreted code tends to run slower than
compiled code due to on-the-fly translation, and it
requires an interpreter to be installed to execute
the code.

High level programming
Scripting:

Scripting typically involves writing small, high-level
programs designed to automate tasks, with
scripting languages usually being interpreted and
suited for system automation, web development, or
other high-level tasks. Examples include Bash (for
shell scripting), and PowerShell.
The advantages of scripting include ease of use,
making it simple to write and modify scripts;
effectiveness in automating repetitive tasks; and
rapid development, as changes can be executed
immediately without recompilation.
However, scripting languages generally have slower
execution times compared to compiled languages
and offer less control over hardware and system
resources compared to lower-level languages.

High level programming
Scripting:

There is a difference between interpreted code and
scripting. Interpreted code refers to any
programming language that executes instructions
directly via an interpreter without prior compilation
into machine code. This can include languages used
for a wide range of applications, such as Python and
Ruby.
Scripting, on the other hand, typically refers to
smaller, high-level programs designed to automate
tasks or glue together other software components.
Scripting languages, which are usually interpreted,
are often more focused on ease of use and rapid
development for specific tasks (e.g., shell scripts). In
essence, while all scripting languages are
interpreted, not all interpreted languages are
necessarily considered scripting languages.

High level programming

Aspect Compiled Code Bytecode Interpreted Code Scripting

Execution Direct
machine code

Intermediate
bytecode by VM

Line-by-line by an
interpreter

Interpreted by a
scripting engine

Performance Fast (direct
execution)

Faster than
interpreted, slower
than compiled

Slower Slower (typically)

Portability
Less portable
(hardware-specific)

Highly portable
(VM needed)

Highly portable
(needs interpreter)
Highly portable

Development cycle
Longer (requires
compilation)

Moderate (compile
to bytecode, then
run)

Shorter
(no compilation)

Very fast (edit and
run immediately)

Use cases

System software,
performance-
critical applications

Cross-platform
applications
(Java, C#)

Web, scripting,
automation

Automation, web
scripting, rapid
prototyping

Compiler

00000100 01110000
10100000 11100011
10010011 00000000
00000000 11100000
00000001 00110000

int number = 4;
int factorial = number;
for (int i = number - 1; i > 0; i--)
{
factorial *= i;
}

int number = 4;

int factorial = number;
for (int i = number - 1; i > 0; i--)
{
factorial *= i;
}

Compiler

Bytecode /
intermediate
language

number = 4
factorial = number
for i in range(number – 1, 1, -1):
factorial *= i

C

Java

Python

Bash
PowerShell
VBA

Interpreter

JVM

Scripting engine

Scripting

High level programming
High level programming:
1. Download the file code.zip from
Brightspace on your Ubuntu VM.
(See → IT Fundamentals week4)
2. Compile (if necessary) all
source code files.
3. Do the Run time competition

    C
    Java
    Python
    BASH

Who will win?
Activity
Portable code
Standard
Library
Functions
Bytecode Scripts Webapps
Portable code
Standard library functions:

Portable code refers to software designed to run on
multiple hardware platforms and operating systems
with minimal modifications. By using standard
libraries, developers can ensure that their code
relies on widely supported functions and APIs,
which promote consistency across different
environments. These libraries abstract the
underlying system details, allowing programmers to
focus on the logic of their applications without
worrying about platform-specific implementations.
However, it's important to note that even with the
use of standard libraries, you still need to compile
the code for each new hardware platform. This
compilation generates machine-specific binaries
tailored to the target architecture, ensuring optimal
performance while maintaining the benefits of
portability across systems.

Portable code
Bytecode:

Portable code in programming languages that
compile to bytecode refers to software that can run
on any platform with the appropriate virtual
machine (VM) without requiring modifications to
the source code. Languages like Java and C#
compile source code into platform-independent
bytecode, which can be executed by the Java
Virtual Machine (JVM) or .NET Common Language
Runtime (CLR), respectively. This approach allows
developers to write applications once and deploy
them across various systems seamlessly. However,
it's important to note that while bytecode enhances
portability, it must still be executed within a VM
specific to the target platform, necessitating the
installation of the appropriate VM on each
hardware platform for the code to run.

Portable code
Interpreted languages:

Portable code in the context of interpreted
languages refers to scripts that can run on various
platforms with minimal or no modifications,
provided that the appropriate interpreter is
available. Languages like Python, Ruby, and
JavaScript are designed to be interpreted, allowing
their scripts to execute across different operating
systems, such as Windows, macOS, and Linux,
without altering the source code. These languages
typically leverage standard libraries and APIs,
ensuring consistent functionality across platforms.
While interpreted languages facilitate portability,
developers should remain cautious of platform-
specific features that could affect script behavior.
Overall, interpreted languages promote the
creation of highly portable code that can function
effectively in diverse environments.

Portable code
Webapps:

Portable code in web applications refers to code
that works well across different web browsers and
devices without needing major changes. Web
applications are built using standard technologies
like HTML, CSS, and JavaScript, which are designed
to be compatible with any device that has a web
browser, including computers, tablets, and
smartphones. To ensure portability, developers
follow web standards and use responsive design
techniques, often leveraging frameworks like React,
Angular, or Vue.js to improve compatibility.
However, it's important to test applications on
different browsers to catch any issues that might
occur due to differences in how they interpret web
standards. Overall, portable code in web
applications provides a smooth experience for users
on various devices.

Activity
Portable code:
1. Download the file hello.zip from
Brightspace on your Ubuntu VM.
(See → IT Fundamentals week4)
2. Compile the JAVA source file.
Also compile the C source file.
3. Run both apps.
4. Move the compiled binary files
to your host system and run
them there. Is this possible?
The assignment
Instruction
Set
Architecture
Machine code Assembly
High level
programming

    Do the practical assignments of

week 4 found on Brightspace
The Assignment

    Read chapters 8 & 9 of the book

Homework
Next week’s topics include:

    Operating systems
    Windows
    Linux
    Scripting

Do your homework !!!

Read the book !!!

See you next week
