Practical assignments

1.2 IT Fu nd am en tals

Version: 20251104. 1630 .msi
Table of contents

    Introduction
    Week 1 – Bits & Bytes (ch.1, ch.2)
        Assignment 1.1: Bits & Bytes intro
        Assignment 1.2: Your favourite color
        Assignment 1.3: Manipulating binary data
        Assignment 1.4: Student number to HEX and Binary
    Week 2 – Digital circuits (ch.4, ch.5, ch.6)
        Assignment 2.1: Parking lot
        Assignment 2.2: Android phone or iPhone?
        Assignment 2.3: Four NAND gates
        Assignment 2.4: Becoming familiar with logisim evolution
        Assignment 2.5: Create an SR Latch in logisim
        Assignment 2.6: Create a Vending Machine in logisim
        Assignment 2.7: Bitwise operators programming assignment
        Assignment 2.8: Java Application Bit Calculations
    Week 3 – Hardware (ch.7)
        Assignment 3.1: Examine your phone
        Assignment 3.2: Examine your laptop.............................................................................................
        Assignment 3.3: Power to the laptop..............................................................................................
        Assignment 3.4: Build your dream PC
        Assignment 3.5: Adders
    Week 4: Software (ch.8, ch.9)
        Low level programming languages (ch.8)........................................................................................
            Assignment 4.1: introduction to ARM assembly
            Intermezzo
        Higher level programming languages (ch.9)
            Assignment 4.2: Programming languages
            Assignment 4.3: Compile
            Assignment 4.4: Optimize
        Assignment 4.5: More ARM Assembly
    Week 5 – Operating Systems (ch.10)
        Assignment 5.1: Unix-like................................................................................................................
        Assignment 5.2: Supercomputers and game consoles
        Microsoft
            Assignment 5.3: Working with Windows
                Windows keyboard shortcuts
                Working in the File Explorer
                Terminating Processes
                Install Software
        Linux................................................................................................................................................
            Assignment 5.4: Working with Linux
            Assignment 5.5: Users and permissions on Linux
            Assignment 5.6: View the contents of files
            Assignment 5.7: Digital Forensics................................................................................................
            Assignment 5.8: Steganography
        Assignment 5.9: Capture disk images
            Prepare the Debian 13 Image Server
            Capture the Ubuntu 24.04 VM
            Restore an Image
            Deliverables
    Week 6 – Networking (ch.11, ch.12)
        Assignment 6.1: Working from home
        Assignment 6.2: Lookup IP addresses of websites
        Assignment 6.3: Subnetting
        Assignment 6.4: HTML
        Assignment 6.5: Network segment
    Week 7 – Host your website on GitHub
        Assignment 7.1: Getting your site ready
        Assignment 7.2: GitHub pages
        Assignment 7.3: Complete the practical assignment

Introduction

In the course introduction infrastructures in quartile 1.1 you learned how to create virtual machines
in VMware Workstation Pro or VMware Fusion Pro. In this course IT Fundamentals in quartile 1.
you will need the following VMs:

These assignments require you to create the following Virtual Machines (VMs):

    Ubuntu 2 4 .04 desktop (Needed from week 1)
    o 1 Processor 4 cores, 4 GB RAM, 64 GB HDD, Network NAT
    o X86- 64 ISO file:
    https://releases.ubuntu.com/24.04/
    o ARM ISO file:
    https://cdimage.ubuntu.com/noble/daily-live/current/noble-desktop-arm64.iso
    o Create a user with your first name, password Welcome
    o The following software packages must be installed in the Ubuntu VM:
    ▪ gcc, openjdk- 21 - jdk, exif, okteta, steghide
    ▪ First run sudo apt update in the terminal.
    ▪ Then sudo apt install [package name]
    Windows 1 1 education + VMware Tools (Needed from week 4 )
    o 1 Processor 4 cores, 4GB RAM, 64 GB HDD, Network NAT(disconnect in installation)
    o X86- 64 ISO file:
    https://www.microsoft.com/nl-nl/software-download/windows
    o ARM ISO file:
    https://www.microsoft.com/nl-nl/software-download/windows11arm
    o Create a user with your first name, password Welcome
    Debian 13 server (Needed from week 5 )
    o 1 Processor 4 cores, 2 GB RAM, 128 GB HDD, Network NAT
    o X86- 64 ISO file:
    https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/
    o ARM ISO file:
    https://cdimage.debian.org/debian-cd/current/arm64/iso-cd/
    o Create a user with your first name, password Welcome

Take relevant screenshots of each completed assignment in weeks 1 to 7.
Justify your answers.

Templates are available for completing these assignments. These templates need to
be downloaded from Brightspace. Each week you fill a template with your results.

Week 1 – Bits & Bytes (ch.1, ch.2)

Bits & Bytes can be found everywhere in the IT world. For example, most operating systems and
processors nowadays are 64-bit, a WAV audio file is 16-bit, and on YouTube you even have an 8-bit
guy who is building his own 8-bit computer:
https://www.commanderx16.com/webemu/x16emu.html

In the end, all the data you see on your computer screen can be traced back to ones and zeros.
Binary data. Text, images, colors, and IP addresses on computers can all be traced back to bits and
bytes. We are going to investigate this in more detail this week.
Assignment 1.1: Bits & Bytes intro

Answer the following questions:

    What are Bits & Bytes?
    What is a nibble? What relationship does this have to a hexadecimal value?
    Why is it wise to display binary data as hexadecimal values?
    What kind of relationship does a byte have with a hexadecimal value?
    An IPv4 subnet is 32-bit, show with a calculation why this is the case.
    Examples of a subnet are:
    o 255.0.0.
    o 255.255.0.
    o Etc. etc.

Assignment 1.2: Your favourite color

Use this tool to select your favourite color: https://share.google/oQ9SOzb3w8hvScElT

Write down the Hexadecimal Color Code:

A byte is the smallest addressable unit in a computer's memory. This information is
important to know, especially in the follow-up assignment where we are going to
manipulate binary data.

Assignment 1.3: Manipulating binary data

Download the BMP file 4pixels.bmp from Brightspace. It is 4 pixel wide and 1 pixel high. Copy this
file from your own laptop to your Ubuntu VM. The binary data in this BMP image is not compressed
like a JPEG, PNG or GIF image. This allows us to easily manipulate the binary data.

The four pixels are colored in the following way:

Write down the hexadecimal values of the above colors in the second column:
Color Color^ code hexadecimal (RGB) Big Endian Little Endian
RED
GREEN
BLUE
WHITE
Favourite
(previous assignment)^

On page 156 of your book you will find an explanation of Big Endian and Little Endian Byte order.
Most PCs use the Little Endian Byte order. For example, how is the hexadecimal color code RED
stored in a computer's memory? Fill in the third and fourth columns of the table.

    Open the BMP file with the online HEX EDITOR HEXED https://hexed.it/
    Start at the end of the file. Can you find the four hexadecimal color codes of the 4 pixels?
    Turn the white pixel into a pixel with your favourite color via the HEX editor.
    Save the file and show that the white pixel has now been given your favourite color.

Some applications in the 21st century:
If you get good with a HEX editor you could edit the binary data of your save games of your favourite
game to give your player more lives or infinite money etc. etc.
Assignment 1.4: Student number to HEX and Binary

    Convert your student number to a hexadecimal number and a binary number.
    Explain in detail that the calculation is correct. Use the PowerPoint slides of week 1.

Week 2 – Digital circuits (ch.4, ch.5, ch.6)
Assignment 2.1: Parking lot

In a parking lot at a small company there are 3 spaces available for visitors. There is a sign at the
front of the street, which shows whether there is still a spot available or not. Sensors have been
installed in the parking spaces themselves that can determine whether the parking space is occupied
or not. If 3 spots are occupied, the sign on the street will show the message in red: full. This is of
course a red led strip shaped after the word full.

a) What logic gate(s) do you need to make this circuit?
b) Fill in the following truth table and complete it further:

Parking lot 1 Parking lot 2 Parking lot 3 Result (full)
0 0 0
0 0 1
0 1 0
Assignment 2.2: Android phone or iPhone?

A new employee at the company Saxion Micro Devices (SMD) can choose an Android phone or an
iPhone when you start your employment. The employee can only make one choice. So you can't
choose an Android phone and an iPhone.

a) What logic gate do you need to make this circuit?
b) Fill in the following truth table and complete it further:

Android Phone iPhone Result (Phone in possession)
0 0

Assignment 2.3: Four NAND gates

You can see here a chip design that is made up of four NAND gates.

It has two input pins and one output pin.

Create the truth table of this logic circuit.
A B Q

Study the truth table, after you've done the math.

Explain how the chip design can be simplified.
Assignment 2.4: Becoming familiar with logisim evolution

Download the Logisim application: https://github.com/logisim-evolution/logisim-evolution/releases/

The Jar file should be enough, but you can also choose an installer for Windows or Mac.

When you start logisim you will see the following screen:

The right plane is the work area, also called the canvas. You can place parts on it and connect them
to each other. Above the canvas, you'll see the following toolbar:

With this toolbar you can get by with the assignments, especially in the beginning.

With the hand you can turn parts on and off.

With the arrow you can select parts and make connections.

With this button you can add text to your design.

These are the input and output pins.

Chips have pins as you can see in this picture.

You can send bits over these pins, so a 1 or a 0.

These are the logic gates that allow us to create digital circuits.

Let's make a simple design. Select an AND gate and click the canvas.

Similarly, place two input pins on the left side of the AND gate

Connect the input pins to the AND gate. Use the arrow.

Also, place an output pin on the right side of the AND gate.

Connect the output pin on the right side of the AND port. Use the arrow again.

Your design should now look like this:

Select the hand and turn on the two input pins.

Now, what is the value of the output pin?

With logisim you can create very elaborate chip designs. In this course, we will only deal with the
fundamentals of logic gates.
Replace the output pin with an LED bulb:

To the left of the work area you will see all kinds of parts that you can place on the work area. In the
folder Input/Output you can find an LED lamp. Place it on the right side of the AND gate and replace
the output pin with it.

Select the hand tool and turn on your two input pins.

Does the LED light turn red?
Place your name and student number in this design.
Save design

o Save this design, select Save As...
o Export the design as a PNG image as well.

If this introduction assignment with logisim is successful, you can proceed with the creation of an SR
Latch.
Assignment 2.5: Create an SR Latch in logisim

Inspired by the practical assignments of Chapter 6 from the book.

Please note! Start with a new logisim file. Save the file named
Vending_Machine. You have an empty field of work. On the left
side of the work field, you can see that the circuit is called main.
You are not going to get started in this yet. Add a new circuit by
clicking on the green plus symbol , name it SR.
In this circuit you are going to make an SR Latch chip design.

Due to the global shortages of affordable chips, the startup Saxion Micro Devices (SMD) is starting to
design and manufacture SR Latches that are used in all kinds of electronic devices. Recreate the
design below in logisim.

Add labels to the input and output pins. This makes the follow-up assignment easier to follow. Select
a single input or output pin and edit a label on the next screen.

Save the file named Vending_Machine.
Assignment 2.6: Create a Vending Machine in logisim

Inspired by the practical assignments of Chapter 6 from the book.

We pick up where we left off with the previous assignment.

Double-click main. You now have an empty workspace again and you
can now add the SR chip you created in the previous assignment to
this field. If successful, continue with this assignment.

The machine factory SlurpIT in Deventer is the first customer to purchase the SR Latch chip from
SMD. They make, among other things, vending machines. Recreate the design below in logisim.
Make sure that you have completed the previous assignment first.

Again, add labels to the input pins and output LEDs.

Completing the vending machine assignment

o Place your name and student number in this design.
o Save this design, select Save As...
o Export the design as a PNG image as well.

Assignment 2.7: Bitwise operators programming assignment

In the course introduction to programming in quartile 1.1 you learned how to program in java. In this
course we’re going to expand your knowledge a bit by working with bitwise operators.

#1 even or odd

Examine the table on the right.

When does a binary number become odd?

Tip: Look at the Least Significant Bit (LSB)

Could you write java code to check if a integer number is odd, without
using the modulo % operator?

That is possible with the bitwise operators. But why would we use them?
Bitwise operators are more efficient than the modulo operator because
they operate directly on the binary representation of numbers, allowing for
faster calculations without the overhead of division.

public class Main {
public static void main(String[] args) {
int number = 5;
if((true)) System.out.println("number is odd");
else System.out.println("number is even");
}
}

Modify the condition of the if statement so that it actually checks if the number is odd or even.

Tip: use the bitwise & AND operator.

Compile and run your modified code in this website: Online Java Compiler. Or use IntelliJ IDEA.
Decimal Binary
0 0000
1 0001
2 0010
3 0011
4 0100
5 0101
6 0110
7 0111
8 1000
9 1001
10 1010
11 1011
12 1100
13 1101
14 1110
15 1111

#2 Power of 2

Examine the table on the right.

When does a binary number become a power of 2?

Tip: Look the numbers: 2, 4, 8 and 16

Write java code to check if a integer number is a power of 2 by using the
& bitwise operator.

Check the binary number pairs:

    2 and 1
    4 and 3
    8 and 7
    16 and 15

public class Main {

public static void main(String[] args) {
int number = 4;
if((true)) System.out.println("number is a power of 2");
else System.out.println("number isn’t a power of 2");
}
}

Modify the condition of the if statement so that it actually checks if the number is a power of 2.

Tip: use the bitwise & AND operator.

Compile and run your modified code in this website: Online Java Compiler. Or use IntelliJ IDEA.
Decimal Binary
0 0000
1 0001
2 0010
3 0011
4 0100
5 0101
6 0110
7 0111
8 1000
9 1001
10 1010
11 1011
12 1100
13 1101
14 1110
15 1111
16 10000

#3 Check permissions

As learned in the module 1.1 introduction to infrastructures Linux uses file permissions.
In Linux, file permissions are
represented in octal format
using three digits, each ranging
from 0 to 7. Each digit
corresponds to a set of
permissions for the owner,
group, and others, respectively.
The permissions are defined as
follows: read (4), write (2), and
execute (1). For example, an
octal value of 755 means the
owner has read, write, and
execute permissions (7), while
the group and others have read
and execute permissions (5). The
sum of these values determines
the permissions assigned to
each category.

What are the file permissions on the file verse in the above picture?
Write the answer as an octal value.

public class Main {
public static void main(String[] args) {
final int READ = 4;
final int WRITE = 2;
final int EXECUTE = 1;

int userPermissions = 7;

if((true)) System.out.println("User has read permissions");
else System.out.println("User can't read. No permissions.");
}
}

Modify the condition of the if statement so that it actually checks the read permissions.
Use the bitwise & AND operator for this assignment.

Compile and run your modified code in this website: Online Java Compiler. Or use IntelliJ IDEA.

#4 Assign permissions

In Linux, you want to be able to assign permissions to a user.

public class Main {
public static void main(String[] args) {
final int READ = 4;
final int WRITE = 2;
final int EXECUTE = 1;

int userPermissions = 0;
System.out.println("User permissions: "+userPermissions);

}
}

Modify the userPermissions so that this user gets READ and EXECUTE permissions. You have to use
the bitwise | OR operator and the given constants.

Compile and run your modified code in this website: Online Java Compiler. Or use IntelliJ IDEA.

#5 Update permissions

In Linux, if a user has certain permissions, you want to be able to change those permissions.

public class Main {
public static void main(String[] args) {
final int READ = 4;
final int WRITE = 2;
final int EXECUTE = 1;

int userPermissions = 6;
userPermissions = userPermissions;
System.out.println("User permissions: "+userPermissions);

}
}

The user now has READ and WRITE permissions. Modify the userPermissions so that this user only
gets READ permissions. Remove the WRITE permissions. You have to use the bitwise ^ XOR operator
and the given constants.

Compile and run your modified code in this website: Online Java Compiler. Or use IntelliJ IDEA.

#6 Two’s complement

Implement the two’s complement method so that we can change a positive number into a negative
one, and back again. You have to use the bitwise ~ NOT operator.

public class Main {
public static void main(String[] args) {
int number = 5;
number = number;
System.out.println("Number: "+number);

}
}

Compile and run your modified code in this website: Online Java Compiler. Or use IntelliJ IDEA.

#7 Display binary, octal and hexadecimal values

This example will show you how to convert an integer value to binary, octal or hexadecimal values.

public class Main {
public static void main(String[] args) {

int number = 10;
System.out.println("Decimal integer: "+number);

String binary = Integer.toBinaryString(number);
String octal = Integer.toOctalString(number);
String hexadecimal = Integer.toHexString(number);

System.out.println("Binary representation: " + binary);
System.out.println("Octal representation: " + octal);
System.out.println("Hexadecimal representation: " + hexadecimal);

}
}
Assignment 2.8: Java Application Bit Calculations

Create a java program that accepts user input and presents a menu with options.

    Is number odd?
    Is number a power of 2?
    Two’s complement of number?

Implement the methods by using the bitwise operators you have just learned.

Organize your source code in a readable manner with the use of control flow and methods.
Week 3 – Hardware (ch.7)
Assignment 3.1: Examine your phone

For this assignment you will examine your own phone.

    What processor is in your phone?
    To which architecture family does this processor belong? In other words, which Instruction
    Set Architecture (ISA) is used?
    How much RAM is in it?
    How much storage does your phone have?
    Which operating system is running on your phone?
    Approximately how many applications do you have installed?
    Which application do you use the most?
    Your phone can be charged with which type of plug?
    Which I/O ports can you visually see on your phone?

Assignment 3.2: Examine your laptop.............................................................................................

We're going to do the same thing as the previous assignment, but you'll be examining your laptop.

    What processor is in your laptop?
    To which architecture family does this processor belong? In other words, which Instruction
    Set Architecture (ISA) is used?
    How much RAM is in it?
    How much storage does your laptop have?
    Which operating system is running on your laptop?
    Approximately how many applications do you have installed?
    Which application do you use the most?
    Your laptop can be charged with what type of plug?
    Which I/O ports can you visually see on your laptop?

Assignment 3.3: Power to the laptop..............................................................................................

Chapter 3 of the book was optional. Still, you need to know something about current, amperes,
watts, voltage and so on as a good IT professional. Your laptop has a power adapter: Look up the
following things by examining your power adapter. There's a lot of text on it, read it. Otherwise, look
up the specifications on the internet. Try to answer the following questions.

    What is the input voltage?
    What is the output voltage?
    How many watts can your power adapter deliver?
    Is the input voltage AC or DC?
    Is the output voltage AC or DC?
    AC/DC what is that?
    If you reverse the polarity of the output voltage, it's bad for your laptop?

    You forgot your power adapter, your laptop normally needs 15 watts. You will be loaned a
    power adapter that can deliver 50 watts. Voltage, polarity, etc. are all the same compared to
    the original power adapter. You can connect the borrowed power adapter to your laptop.
    What will happen? Also explain why you think that.

Assignment 3.4: Build your dream PC

Go to the site below and choose your own PC components to build your dream PC:

https://nl.pcpartpicker.com/list/

Take a screenshot of the result. Justify why you put together this configuration. Compare your
current laptop/computer with the configuration of your dream PC. Describe these differences in
detail.
Assignment 3.5: Adders

Complete the half adder, full adder and 4-bit adder assignment as described in the PowerPoint slides
of week 3 in Logisim. Save the chip design and also export three PNG pictures of the separate
finished designs.

See the PowerPoint slides of week 3.
Week 4: Software (ch.8, ch.9)
Low level programming languages (ch.8)........................................................................................
Assignment 4.1: introduction to ARM assembly

Assembly programming is seen as a complicated activity these days. Yet you will see in this
assignment that it is actually not that bad. Each processor family has its own instruction set.
Therefore, applications written in assembly for an x86 processor are not executable on an arm
processor. The book used in this course focuses mainly on assembly for an arm processor, so we will
use this instruction set in this assignment.

You have read in the book that a processor is made up of a number of parts. A Control Unit (CU), an
Arithmetic Logic Unit (ALU) and the Registers. The CU can retrieve new instructions, translate them,
and control the overall process. The ALU will perform calculations. The Registers are memory spots
in the processor where intermediate results can be stored before they are forwarded to other
hardware components. The register is memory that can be accessed very quickly by a processor.
Exactly how many registers there are varies by processor family.

We are going to use the following online arm assembly simulator:

https://wunkolo.github.io/OakSim/

On the left side can edit the code. On the right-hand side, you can see which hexadecimal values are
stored in the register at the top right. At the bottom right, you can see which bytes have been
written into the RAM. TIP! If there is an error in your code, nothing will be written to the RAM.

We are going to practice with a number of instructions to perform simple calculations.

    mov [Rn], [value] Place value in registry Rn
    add [Rn], [value], [value] Add values together, place result in Rn
    sub [Rn], [value], [value] Subtract values from each other, place result in Rn
    mul [Rn], [value], [value] Multiply values together, place result in Rn

Rn is one of the available registers that we can use, for example R0.

Enter the following code and run it by clicking the RUN button. You can also stop the program by
clicking the RUN button again.

What is the value of:

    r0?
    r1?
    r2?
    r3?

Main: is a label for the above piece of code. We will now discuss how to use labels. We're starting to
program a new program, so you can delete the previous code in the code editor. Take the code
below and give it a try.

There are three more new instructions here that we haven't seen before.

    cmp [Rn], [value] Compare two values with each other
    beq [Label] Go to label if the previous equation is true (beq = branch if equal)
    b [Label] Go to label

The b instruction is an abbreviation for branch, it is a jump command to another piece of code. The
instruction beq is the abbreviation for branch if equal. So jump to label Exit if the value of register r1
becomes equal to 144 (decimal value), see the cmp statement. The instruction cmp is the
abbreviation for compare. It compares two values with each other. As long as the comparison of the
beq statement is not true, the jump to label Loop is performed.

Now for the assignment you need to perform. Empty the code editor again. You may only use the
assembly instructions below. With your acquired knowledge about labels and the following ARM
assembly instructions...

    mov
    sub
    mul
    cmp
    beq
    b

... it should be possible to make a loop that calculates the factorial from a number. What is a
factorial? There's a button on your calculator with an exclamation mark on it!.

5! = 5 x 4 x 3 x 2 x 1 = 120. What is 120 in hexadecimal again?

You start by placing the number 5 in a register. Complete the code below:

Main:

mov r2, #5

Loop:

End:

The result of 5!, you save in register r1. Show the result to your teacher.
Intermezzo

Games that used to be written for a Nintendo NES or Commodore64 were largely made in 6502
assembly. Of course, you could also program in BASIC, but if you really wanted to make use of all the
technical possibilities that these machines had to offer, the seasoned programmer opted for
assembly. This was in the 80s of the 20th century.

In the 90's there were also game programmers who wrote their PC games almost entirely in
assembly, an example of this is Chris Sawyer who became known for Transport Tycoon in 1994 and
Rollercoaster Tycoon in 1999. An open source port of transport tycoon is openttd, but it is mainly
written in C/C++.

Even today, assembly is mainly used when you want to communicate directly with the hardware and
where speed and performance are important.

Sources:
Retro game development: https://www.youtube.com/watch?v=RtY5FV5TrIU
Chris Sawyer: https://en.wikipedia.org/wiki/RollerCoaster_Tycoon_(video_game)#Development
Open Transport Tycoon Deluxe: https://www.openttd.org/
Higher level programming languages (ch.9)

In the previous chapter we were introduced to assembly for the arm processor. In principle, you
could program everything with assembly, but that takes a lot of time and thought. That's why
higher-level programming languages have been designed. They are higher because the level of
abstraction is higher. With assembly, you talk directly to the CPU, which can be useful for some
situations where you want to implement performance optimizations, but for the average software
developer, working in assembly is not efficient. Projects have deadlines, and it's easier to meet those
deadlines if you can design and realize a software product faster. Unfortunately, because of these
abstractions, an average software developer no longer knows exactly how a computer works.

The assignments below are executed in your Ubuntu 2 4 .04 desktop virtual machine.
Assignment 4.2: Programming languages

Launch your Ubuntu virtual machine. Investigate which compilers/interpreters for programming
languages are installed in Ubuntu 2 4 .04 desktop. Launch the terminal .

Type in the following commands:

    javac --version javac is the Java compiler
    java --version java is the Java runtime environment (JVM)
    gcc --version GCC is a C/C++ compiler
    python3 --version python3 is a python interpreter
    bash --version Bourne Again Shell in Linux for Scripting

If you get stuck in an environment, the exit() command can help. Or the key combination

Assignment

    What versions of the compilers/interpreters for programming languages are installed?

Assignment 4.3: Compile

Download the following zip file from Brightspace: code.zip

Copy it to your Ubuntu 2 4 .04 desktop VM. Once you have extracted the zip file, open the terminal
again and go to the location where these files are located. In the terminal, show which files are in
this directory.

You should see 4 source code files:

    Fibonacci.java java source code
    fib.c c source code
    fib.py python3 source code
    fib.sh bash script source code

Search with Google:

    Which of the above files need to be compiled before you can run them?
    Which source code files are compiled into machine code and are then directly executable by
    a processor?
    Which source code files are compiled to byte code?
    Which source code files are interpreted by an interpreter?
    These source code files will perform the same calculation after compilation/interpretation.
    Which one is expected to perform the calculation the fastest?
    How do I run a Java program?
    How do I run a Python program?
    How do I run a C program?
    How do I Run a Bash Script?
    If I compile the above source code, will a new file be created? If so, which file?

There is one thing that is different on Linux than on Windows. Compiled files or script files are not
directly executable. To do this, you must first give them permissions. I can already tell you that
fib.sh is a Bash script file that doesn't need to be compiled, but still needs to be made executable.
You can do this with the command:

sudo chmod a+x fib.sh

If you show the contents of the directory with the ls command, you will see that the file has changed
color and has also been given executable rights. You can run it with this command:

sudo ./fib.sh

Assignment

    Compile the source files where necessary
    Make them executable where necessary
    Run them
    Which (compiled) source code file performs the calculation the fastest?

Assignment 4.4: Optimize

The previous assignment should show that a program written in C runs faster than a program
written in Java, Python or Bash. If that is not the case, then we must do something about it.

Can you explain why you would expect that?

The gcc compiler can perform a number of optimizations during the compilation, but you have to
indicate that yourself.

Open the terminal and run the following command:

man gcc

You should now see the manual (man page) of the gcc compiler in front of you.

Assignment

a) Figure out which parameters you need to pass to the gcc compiler so that the compiler
performs a number of optimizations that will ensure that the compiled source code will run
faster. Tip! The parameters are usually a letter followed by a number. Also read page 191 of
your book, but find a better optimization in the man pages. Please note that Linux is case
sensitive.
b) Compile fib.c again with the optimization parameters
c) Run the newly compiled program. Is it true that it now performs the calculation faster?
d) Edit the file runall.sh , so you can perform all four calculations in a row using this Bash script.
So the (compiled/interpreted) C, Java, Python and Bash versions of Fibonacci one after the
other.

Assignment 4.5: More ARM Assembly

Like the factorial example, you can also implement the calculation of a power of 2 in assembly.
For example you want to calculate 24 = 16. Use iteration to calculate the result. Store the result in r 0.

Main:
mov r1, #2
mov r2, # 4

Loop:

End:

Complete the code. See the PowerPoint slides of week 4.
Week 5 – Operating Systems (ch.10)

Today, there are two main types of operating systems:

    Unix-like
    Windows

Let's take a closer look at both operating system types.
Assignment 5.1: Unix-like................................................................................................................

Assignment

a) Find out what the difference is between UNIX and unix-like operating systems?
b) Study the image above named UNIX timeline. Find out who Ken Thompson, Dennis Ritchie,
Bill Joy, Richard Stallman, and Linus Torvalds are and what they have contributed to the
development of UNIX or unix-like systems and to IT in general. TIP! English-language sources
often contain more detailed information about these individuals.
c) What is the philosophy of the GNU movement?
d) Does Ubuntu as a Linux operating system conform to the philosophy of the GNU movement?
Please explain your answer.
e) Find out what is the Windows Subsystem for Linux?
f) Find out which operating system family belongs to Android, iOS and ChromeOS?

Assignment 5.2: Supercomputers and game consoles

Linux is an operating system that is mainly used on Servers. But did you know that Linux is also
widely used as an operating system for supercomputers?

a) Research on this site what supercomputers are used for and write a short summary of it:
https://www.computerhistory.org/timeline/search/?q=Supercomputer

b) IBM is a company that has already built a number of supercomputers. One of them is IBM's
Roadrunner. The CPU developed for this supercomputer was further developed at a later
stage as the CPU for the PlayStation 3 console. Find out what a PlayStation 3 cluster is and
what it was used for?

c) You can build a supercomputer by putting a few computers together in a cluster. Oracle has
done this, for example, with a collection of Raspberry Pi's:
https://blogs.oracle.com/developers/post/building-the-worlds-largest-raspberry-pi-cluster
What specific operating system is running on this cluster?

d) Does Oracle's Raspberry Pi supercomputer appear in the list of the 500 fastest
supercomputers in the world? Make a logical decision for this, without going through the
entire list. https://www.top500.org/lists/top500/2025/06/

e) What CPU architecture is used for the PlayStation 5 and Xbox Series X?
What operating systems run on these consoles?
What conclusion can you draw from the answer of the previous question?

Microsoft

Microsoft became big with the development of operating systems. First MS-DOS for the IBM PC and
later Windows. Office is also a well-known software product that they have developed. Today, their
focus is also on providing cloud services through Azure and Gaming.
Assignment 5.3: Working with Windows

For this assignment, use the Windows 1 1 education virtual machine you created at the start of this
course. See the introduction chapter for the specifications. If you're using a Mac, read this support
page first:

https://support.apple.com/en-in/guide/mac-help/cpmh0152/mac
Windows keyboard shortcuts

Keyboard shortcuts in Windows with the  key
 Start Menu^  + K Connect^  + U Accessibility Center^
 + A Action screen  + L Lock  + X Shortcuts menu
 + B System tray^  + M Minimize^  +. of ; Emoji^ window^
 + D Desktop  + P Presenter mode  + , Briefly show desktop
 + E Explorer^  + R Run^  + Pause System Properties^
 + G Game bar  + S Search  + Tab Task view
 + I Settings^  + T Browse apps^  + Cijfer Launch app on taskbar^

Common keyboard shortcuts in Windows
Ctrl + C Copy Ctrl + Shift + Esc Open Task Manager
Ctrl + V Paste Alt + Tab Quick Switching Apps
Ctrl + X Cut Ctrl + Alt + Tab Switching Apps
Ctrl + Z Undo Alt + F4 Close Active App
Ctrl + A Select All PrtScrn Screen recording (photo)
Del Delete (recycle bin) Alt + PrtScrn Photo of Active App
Shift + Del Permanent Delete Ctrl + R of F5 Active Screen Refresh
Ctrl + Esc Start Menu Ctrl + Y Redo action
Use the Red Keyboard Shortcuts with Caution

a) Practice for about 10 minutes with the  keyboard shortcuts combinations, skip the general
shortcuts in this exercise. Take a look at which screens are open.
b) The file explorer can be opened with  + E, which key combination could you also use?
c) Open the system properties with a  Key Combination.
d) Open task manager with a key combination. Take screenshots of the tabs: processes (shows
active processes), performance, and users. Place these three screenshots in your homework
template.
e) If you're giving a PowerPoint presentation and you connect your laptop to a projector,
Windows can use the projector as a second screen. For example, you may have Outlook
open on your first screen that you don't show over the projector, while the PowerPoint
presentation is displayed on the projector, or the second screen. Which key combination
should you use for this?
f) If you leave the classroom for a while and you leave your laptop behind, it is wise to lock the
screen. Your Apps will continue to run in the background. So, for example, if you're waiting
for a download that takes a while, lock the screen and get a cup of coffee. Which key
combination do you use for this?

g) Open the Run screen with a key combination. On this screen, type CMD and press <enter>.
Take a screenshot of this result and paste it into your homework template.

Working in the File Explorer

Close all active screens in your Windows 1 1 education VM. After that, open the file explorer.

Click on This PC and double-click on the C: drive.

Create the Directory SAXION here. In this folder, create the following hierarchical folder structure:

In the YEAR1 folder, create the following 4 folders:

    QUARTILE 1
    QUARTILE 2
    QUARTILE 3
    QUARTILE 4

Copy these folders above to YEAR2 as well. Keyboard shortcuts CTRL+C, CTRL+V? Or do you prefer to
use the right mouse button?

In the folder QUARTILE1 of YEAR1, create three folders. Name them after the courses you took in
that quartile. Do the same for the folder QUARTILE2 of YEAR 1, create 3 folders for the courses you
take this quartile. In the folders for the created courses, create a text file called info.txt. In that file,
type in 1 line what the course is about. Don't forget to save these files.

Download the following three images from the site below to the C:\Saxion folder:

    Wave.png
    Plug.png
    Tumble.png

See site: https://wiki.openjdk.org/display/duke/Gallery

Double-click the SAXION folder.

Go to the address bar in File Explorer and click on it:

Make sure that the entire path is selected in the address bar. Type CMD in the address bar. Press
.

This will open the Command Prompt in the C:\Saxion> folder.

Copy with the command copy ...:

    ...the Wave.png file to the folder for the Introduction to Programming course.
    ...the file Plug.png to the folder for the course introduction infrastructures.
    ...the Tumble.png file to the folder for the Organization and IT course.

Prove with screenshots that you have successfully performed this via the Command Prompt. Show
that you understand the difference between a relative and absolute path. In any case, demonstrate
this with the three copy commands you used.

Type in the following command: tree

After that, type the command: echo %username%

Take a screenshot of this folder structure with your username underneath.

After that, type in the following command in the Command Prompt: exit

Place this screenshot in your homework template.

You should be back in the file explorer.

    Select the Saxion folder
    Right-click, this will open a context menu.
    Select Copy to... > Compressed (zipped) folder

Also take a screenshot of the file explorer in which all created folders and subfolders in the folder
c:\Saxion are visible.
Terminating Processes

Terminating processes/applications is sometimes necessary through the task manager window. For
example, if an application stops responding because it has ended up in an infinite loop.

    Launch the application calculator
    Launch the Task Manager window
    In the task manager window, show that the application calculator is running.
    Take a screenshot of this.
    End the application calculator in the task manager window.

Install Software

Install the following applications in the Windows 1 1 education VM with winget :

    Firefox
    WinSCP
    Notepad++
    7zip

Windows 1 1 must be equipped with Firefox. We will do this by means of a so-called package
manager. There are several package managers available for Windows. Let's get started with
winget developed by Microsoft for Windows.
Finish the Windows 1 1 installation with winget
Log in to your Windows 1 1 VM. There, open the command prompt as Administrator.
Check here if the winget command works.
If you get the message above. You need to download winget from the Microsoft Store.
Open the Microsoft Store
When the Microsoft Store application is started, click on the Library button. Here you will find
Updates and Downloads.
In this list, look for the App Installer
Click on the Update button to update the App Installer.
Wait for this Application to be installed. The Microsoft Store application may be closed when
the installation of App installer is complete.
After that, go back to the Command Prompt as Administrator.
Retype the winget command.
Run the following command:
winget search Firefox
Agree to terms and conditions: Y
Run the following command:
winget install -e --id Mozilla.Firefox
Assignment:
a) Show that you have installed Firefox via winget in the command prompt.
b) Explain in your own words what exactly the above command does, explain the - e and
--id options used as well. Use this site:
https://learn.microsoft.com/en-us/windows/package-manager/winget/install
c) Also install the following applications via winget and take screenshots of the
successful installations:
• 7Zip
• notepad++
• winscp
Linux................................................................................................................................................

Figure out and demonstrate the following skills on your Ubuntu VM.
Assignment 5.4: Working with Linux

    Copying files
    o Create a text file in your user home directory.
    o Show that you can copy this file from the home directory to the Documents
    directory both in the file explorer and in the terminal.
    Navigating the file structure
    o Navigate to the /etc folder in the file explorer
    o Navigate to the /etc folder in the terminal
    o How to get back to your home folder in the terminal?
    o Name one significant difference in Linux's file structure when comparing it to
    Windows.
    o What is the /etc directory usually used for?
    Compress files
    o Which command in the terminal would you use to compress a text file into a tar
    archive?
    o With which command in the terminal would you be able to extract a tar file?
    o Compress a text file in a tar archive and compress it with gzip.
    View processes
    o Install the application htop via a terminal command
    o Launch the htop application. Explain what this application shows.
    Install Software
    o Software can be installed via the terminal in Ubuntu as we just did in the previous
    assignment, but it can also be installed in Ubuntu via the Software center. Find and
    install the Sublime Text application on your Ubuntu VM
    o Using a terminal command, install the neofetch application. What does this
    application show when you launch it?

Assignment 5.5: Users and permissions on Linux

Create a text file on your Linux VM with the following contents:
#!/bin/bash
echo Hello <Your name, student number>!

Save the file under the name hello.sh in a new directory ~/hello/

    Make the file executable with chmod.
    Try to run it with ./hello.sh
    Use the chmod command to make the file executable only for the logged-in user. Other users
    are only allowed to view the file via a text edit command such as cat or less. See the man pages
    of chmod how you could do this. TIP! Use chmod Numeric notation.

Assignment 5.6: View the contents of files

For this assignment, you can use the following commands: cat, wc, less, tail, head & grep.

    What does each of these commands do? Write it out for yourself.
    Download the file SherlockHolmes.txt from Brightspace and place it in a directory on your VM.
    Or download the file directly from https://www.gutenberg.org/files/1661/1661-0.txt.

Use the commands cat, wc, less, tail, head & grep for the following assignments:

    How many lines does the file have? How many words? And how many characters?
    On which lines is the word "kingdom" in the file? TIP! grep -n
    Use the head and/or tail commands to see the 20 words above and below the word "kingdom"
    on the screen.

Assignment 5.7: Digital Forensics................................................................................................

The digital forensics department specialises in the recovery of erased data or the recovery of
corrupted data. They also check whether data is hidden in binary files. Knowledge of bits and bytes is
needed to steer this research in the right direction.
EXIF

During a raid, several smartphones were confiscated with some interesting photos on them. Analyze
the jpeg file with the EXIF tool and document the following metadata for this file. Download the file:
oldcar.jpg from Brightspace, copy it to your Ubuntu VM.

    Identify phone brand/type
    Are there GPS coordinates known?
    o If yes: look up the location in Google maps and Streetview
    o In which city was this photo taken?

Filename extensions
In Windows, the file extensions are important because they determine the file type. Windows only
looks at the extension and then tries to open that file with the default application that is suitable for
it. While in the Ubuntu VM we could remove the extension of the oldcar.jpg file and it will still be
opened as a jpg file by an image viewer.

    Rename the file to oldcar. (So you've removed the file extension)
    In the terminal, type the command file oldcar.
    Does Ubuntu still consider it to be a jpg file?

BASE64

Hexadecimal is also called BASE16, which uses the characters 0 - 9 and A-F to encode binary data. We
have seen this in the previous exercises. Another widely used system for encoding binary data is
BASE64. That's what we're going to work with in this assignment. A partial e-mail message has been
intercepted containing binary data. Binary data sent via e-mail is often encrypted via BASE64. During
the BASE64 encoding process, groups of 3 x 8-bit will be regrouped into groups of 4 x 6-bit and
translated into characters A-Z , a-z , 0 - 9 and +/. The = sign is also used as a filler sign. Download the
following text file from Brightspace and copy it to your Ubuntu VM: email-base64.txt

You can also see the contents of this file below. A colleague of yours who has a lot of experience with
BASE64 data thinks that this is a gif image file.

R0lGODlhbAA0APcAAAAAAAAAMwAAZgAAmQAAzAAA/wArAAArMwArZgArmQArzAAr/wBVAABVMwBV
ZgBVmQBVzABV/wCAAACAMwCAZgCAmQCAzACA/wCqAACqMwCqZgCqmQCqzACq/wDVAADVMwDVZgDV
mQDVzADV/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMrADMrMzMrZjMrmTMr
zDMr/zNVADNVMzNVZjNVmTNVzDNV/zOAADOAMzOAZjOAmTOAzDOA/zOqADOqMzOqZjOqmTOqzDOq
/zPVADPVMzPVZjPVmTPVzDPV/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2Yr
AGYrM2YrZmYrmWYrzGYr/2ZVAGZVM2ZVZmZVmWZVzGZV/2aAAGaAM2aAZmaAmWaAzGaA/2aqAGaq
M2aqZmaqmWaqzGaq/2bVAGbVM2bVZmbVmWbVzGbV/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kA
ZpkAmZkAzJkA/5krAJkrM5krZpkrmZkrzJkr/5lVAJlVM5lVZplVmZlVzJlV/5mAAJmAM5mAZpmA
mZmAzJmA/5mqAJmqM5mqZpmqmZmqzJmq/5nVAJnVM5nVZpnVmZnVzJnV/5n/AJn/M5n/Zpn/mZn/
zJn//8wAAMwAM8wAZswAmcwAzMwA/8wrAMwrM8wrZswrmcwrzMwr/8xVAMxVM8xVZsxVmcxVzMxV
/8yAAMyAM8yAZsyAmcyAzMyA/8yqAMyqM8yqZsyqmcyqzMyq/8zVAMzVM8zVZszVmczVzMzV/8z/
AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8rAP8rM/8rZv8rmf8rzP8r//9VAP9V
M/9VZv9Vmf9VzP9V//+AAP+AM/+AZv+Amf+AzP+A//+qAP+qM/+qZv+qmf+qzP+q///VAP/VM//V
Zv/Vmf/VzP/V////AP//M///Zv//mf//zP///wAAAAAAAAAAAAAAACH5BAEAAPwALAAAAABsADQA
AAj/APcJHEiwoMGDCBMqXMiwocOHEAsWoaChQhE70CJq3Mixo0EjFTdUpLDhjceTKFNK1LCBJMsK
GigUUUmzJkQ7RURWoACzwoaWdmwKHaoQp0ufJBNGUwYKFNGnKI1QcNmSYKg6MKe2jAa1a8eWG3pC
gxMT7E+Ky7yq1WiHok6WJMGSpMB1rV2Hy0j21EnyoqagdwMvzBm3YhGnghMzhKuzquLHCSu+BMsS
smWCYGGKDBsT8eXHE83qDbnh82NQcUX/HGlaobKldWvOpayZJ8WZHF8rIxqtZcysJROCYrl1YTR9
0eL6lMw1NsGcIhPakcwzZhHnBO2sTmsQ1E84A1GH/+zZN2F1mLgZJj/qGGFoCtwJop49u2V6gnC0
Ujg4v47A5Jy9AU0ooEx0H0HQ+CTXQ8Mth5RnBb3VXVwkgaKMKflJVlpBdZy1wYH7eLcBePu8IRmE
/7k3W0UoErQffhpSsJtAbwAm0HvOAdhSixQeSFZtKPYnkIcQzWXHchtOSOJAOA7UFoRnVRDhXCAK
NFp8+2Dl4YvhfTfkXC0iNNyH+5Ql40GEodjSjCGSZBKTcGU00GgJhabBfW1R9pN8U/m3D1ln2ahQ
WBQ4lRNMSxJEHXae5UmBoGG1V6JOVf5H50Bv2MdZoV2OOFBPJyoEoAaWcnZQalwWJB5Qz80VWxGS
Cf9qkFyxYaXBMrAiFV6fA0EzmmYJveHmQHKhqIxckgqU54OYwYVZT2weJFkFbP7olGY+CSRiovuA
SuibBbkanmZJaqshsAS9oVlFct6IVGy1YRfhcp7Z6lSCcDklZEGOUqoqWOG2lGqI2HZmEGHJ8qUo
Uu0exJdn1t644LYIZUohlG42pfFPIiWKmlyhILSXROIOqVOYn8JVK0yeFbbBen4eNGp0c25J3YKd
GqwtihXFbHJF6VKp0KUCRWxpfZ4qpReX+bWU1dOkeTZfBVJPVVByWO7zXrumkCvdbATZKmiecvl8
KsACqXxQW4YNFE1FpnSabIs/wVSPi4SifBSERqf/7CC3qoKqbXUJ1eaiZ+uZNVjJg6tNsqlhs3y1
WzD5+ROEY+4osQaa1KnZklWvBha4Dut0MJC9RhqTQWRxWtCPFZEI61S0y5XeXAp1LdlBcDR2cZ2M
M3leTFPFa1CeYZrl506ik2ejsDItRNFOYRZRcFbyfmm1zNOuthPp6cYk65xTGeE2KHa8AUcdcDS8
T/YP6ckYcQNrFA36b6jvfmtfc6bg0vx7zLlCEhP4BdArH6tNcQ4oGGVYrzFAY+Ba0ocwlsRIgnZ5
T2ZCEhcMqgU6HKSAEeowGrp4ECoT0cphBiIVDoLvhDSJhgHzxMHxwbArCaLKVA4TrRuicDRyoZAB
HX2IkmN1b0s9JKJNcHUztCkRh3AgzFSS+MQqaiQgADs=

Decode this BASE64 String, and save the output as a binary gif file. To do this, use the base64
command on the Ubuntu VM. Read the man pages of the base64 command on your Ubuntu VM and
find out how to do this. TIP! Figure out how to send output to a file instead of the screen on Linux.
Assignment 5.8: Steganography
SECRETS, HIDING DATA IN PLAIN VIEW !!!

    Select the blank line above.
    Copy the selected line.
    Paste the line into a text editor (notepad/texteditor/nano etc.)

With the Linux application Steghide you can, among other things, hide text files in images. This is
possible by adjusting the least important bits. The least significant bits (LSB). If we look at large
numbers, for example 2,121,045, then the number 5 in this series of numbers is the least important.
It weighs the least on the total. It's the same with binary data. By adjusting the least important bits,
the difference will hardly be noticeable.

Download the file: apple2.jpg from Brightspace, copy it to your Ubuntu VM.

Hidden in this file is a text file with the password: apple2

Use the command line tool steghide --help to extract this text file.
Assignment 5.9: Capture disk images

We have a Windows 1 1 VM and an Ubuntu Desktop 24 .04 VM. In business, it is common to make
regular backups of your data. A large company often has a large number of similar laptops that it
distributes to the employees. Manually installing an operating system for each machine with the
necessary applications and data is too much work. This could be done more efficiently. If an employee
throws his laptop down from the third floor out of frustration, a replacement laptop should be ready
within half an hour. Therefore, in addition to the Windows VM and Ubuntu VM, install a new Debian
13 Server VM.

In this assignment, you will capture a complete virtual machine disk (Ubuntu 24.04 Desktop) and
store it on a Debian 13 server using Linux command-line tools.

You will then create a new empty VM and restore the captured image to verify that the system can
be successfully recovered.

This process is architecture-agnostic — it works on ARM or x86-64 systems, as long as you match the
same architecture between source and target.

VM Role OS / Architecture Purpose

Image Server Debian 13 (x86-64 or ARM) Stores all VM images

Client 1 Ubuntu 24.04 Desktop VM Capture image

Empty VM Ubuntu 24.04 Desktop VM Restore image

You only have to capture and restore one image. All VMs must be networked together (NAT). You
can skip all optional steps. First read all the steps, so that you understand what needs to be done
before randomly executing Linux commands in the terminal.
Prepare the Debian 13 Image Server

The Debian server will receive and store the compressed disk images from other VMs.

Update the server and install SSH

SSH allows secure remote connections and file transfers.

    sudo apt update
    sudo apt install openssh-server -y
    sudo systemctl enable --now ssh

Create a directory for images

We’ll store all .img.gz files in /srv/images.

    sudo mkdir -p /srv/images
    sudo chown $USER:$USER /srv/images

Find your server’s IP address

You’ll need it for the SSH connection later.

    ip a

Example output:

    inet 192.168.56.101/24

Your Debian server’s IP might differ — note it down.

Test SSH connectivity from another VM

From any client VM (or your host machine):

    ssh user@192.168.56.101

If you get a welcome message from Debian, the connection is ready.
Capture the Ubuntu 24.04 VM

This step copies the entire contents of your Windows disk (including bootloader and EFI) to the
Debian server.

Boot from an Ubuntu Live ISO on the Ubuntu 24.04 VM

    In your VM manager, attach the Ubuntu 24.04 Live ISO.
    Boot the VM with power on to firmware and select “Try Ubuntu” (do not install).
    Once the desktop loads, open the Terminal (Ctrl + Alt + T).

Identify the Ubuntu desktop disk

List all disks connected to the VM:

    lsblk

Typical output:

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINTS
sda 8:0 0 64G 0 disk
├─sda1 8:1 0 100M 0 part
├─sda2 8:2 0 16M 0 part
├─sda3 8:3 0 63G 0 part
└─sda4 8:4 0 900M 0 part

Here, the full disk is /dev/sda. But your disk can also be named /dev/nvme0n1
Do not select partitions (like /dev/sda3); you need the entire disk.

Start the capture process

Replace and <server_ip> with your Debian server username and IP. And put in the right
disk in the if= parameter.

sudo dd if=/dev/sda bs=4M status=progress | gzip | ssh @<server_ip> "cat > /srv/images/ubuntu2404_vm.img.gz"

Explanation:

    dd if=/dev/sda → reads the raw data from the entire disk.
    bs=4M → reads/writes in 4 MB blocks for speed.
    status=progress → shows live progress information.
    gzip → compresses the data on-the-fly.
    ssh @<server_ip> → securely streams data to the Debian server.
    cat > /srv/images/win11_vm.img.gz → saves it as a compressed image file.

This process may take several minutes depending on disk size and network speed.
You’ll see a running byte counter until it completes.
Restore an Image

Now you’ll create a brand-new empty VM and restore one of the captured images onto it.

Create a new blank VM

    In your hypervisor, create a new VM.
    Match these settings to the original:
        Same architecture (ARM or x86-64)
        Same CPU count and RAM
        Same firmware type (UEFI or BIOS)
        Same disk size
    Do not install an OS. Leave the disk empty.
    Attach the Ubuntu Live ISO to this new VM.

Boot the new VM and open Terminal

Choose “Try Ubuntu” from the boot menu.
Open the Terminal again (Ctrl + Alt + T).

Restore the captured image

Replace and <server_ip> with your Debian server username and IP. And put in the right
disk in the if= parameter. Run the following command to restore the Ubuntu 24.04 image:

ssh @<server_ip> "cat /srv/images/ubuntu2404_vm.img.gz" | gzip -d | sudo dd of=/dev/sda bs=4M status=progress

Explanation:

    The image file is read from the Debian server.
    gzip -d decompresses the data as it streams.
    dd of=/dev/sda writes it directly to the VM’s disk.
    status=progress displays restore progress.

When it finishes, power off the VM, remove the Ubuntu ISO, and boot from the disk.
If the restore worked, Ubuntu should boot normally.
Deliverables

Student must submit:

    Documentation of steps
    o Screenshots or terminal logs showing:
    ▪ Debian server setup
    ▪ Disk capture
    ▪ Image storage
    ▪ Restore process
    o A screenshot of the successfully booted restored VM

Key Notes

    Always capture from a live environment to avoid corrupt images.
    Capturing the whole disk preserves partition tables, bootloaders, and EFI data.
    Never restore onto a disk with important data — the process overwrites everything.
    Ensure the same architecture and firmware type between source and target.
    Works identically on ARM and x86-64 hardware.

Week 6 – Networking (ch.11, ch.12)
Assignment 6.1: Working from home

You do this assignment on your two created virtual machines. Find out what settings or software
needs to be installed to enable the following commands. For example, for ssh, an openssh server
must be installed on the Ubuntu VM. Run the following commands. If you don't have a Windows
VM, use your own laptop's terminal/command prompt.

    Show that you can log in to the Ubuntu VM via the command prompt via the command ssh.
    Show that you can copy a file to the Ubuntu VM in the command prompt via your Windows
    VM via the command scp.
    Show that you can remotely control the Windows VM via the remmina application on
    Ubuntu.

Assignment 6.2: Lookup IP addresses of websites

On your own laptop, start the command prompt or the terminal. You may also run this command in
the Ubuntu VM. We are going to ask DNS Servers on the internet which IP addresses belong to a
number of domain names.

Find out which ip addresses the following websites use. You need to investigate this with the
nslookup command. Open the terminal and type in the nslookup command and run it. Then enter
the following websites to request and document the IP addresses.

    amazon.com
    google.com
    one.one.one.one
    dns.google.com
    bol.com
    w3schools.com

Exit this application with the command exit.

Visit one of the sites by using the IP address in the web browser instead of the domain name.
Assignment 6.3: Subnetting

    How many IP addresses are in this network configuration 1 92.168.110. 128 /2 5?
    What is the usable IP range to distribute to the connected computers?
    Check your two previous answers with this Linux command: ipcalc 192.168.110.128/25
    Explain the above calculation in your own words.

Assignment 6.4: HTML

Study Chapter 12 from the book. Take a look at Project #37 in particular.

On your Ubuntu VM, go to the home folder of your logged-in user. In this folder (directory) you place
the following files.

    Download the Site.zip file from Brightspace. Unpack it.
    Edit the home.html file. You don't edit the other html files.
    Create a simple web page in which you describe a hobby of your own. Download a number
    of images in the images folder and use relative path names in your html code to display
    these images on your web page.
    If you want to broaden your HTML knowledge a bit, you could check out this site:
    https://www.w3schools.com/html/

When you're done with that, open the terminal:

    In the terminal, navigate to the folder named Site. Then execute the following commands:
    o ip a
    After this, write down your IP address.
    o python 3 - m http.server 8000
    to start a web server on port 80 00

Show on your Windows VM that you can view your webserver + html page via a web browser by
going to the IP address of your Ubuntu VM. Or use your own laptop's web browser to connect to the
Ubuntu VM web server.

Create a new zip archive of the Site directory in the Ubuntu file explorer. Select the Site folder and
choose the appropriate option from the context menu that you can access with the right mouse
button. Copy this zip archive from your Ubuntu VM to your own laptop.
Assignment 6.5: Network segment

Remember that bit wise java application you’ve made in week 2? Expand that application so that
you can also calculate a network segment as explained in the PowerPoint slides of week 6. Use the
bitwise & AND operator. You need to be able to input two Strings. An IP address and a subnet.
IP: 192.168.1.100 and subnet: 255.255.255.224 for /27

(^) Example: 192.168.1.100/27 (^)
Calculate the network segment
IP Address: 11000000.10101000.00000001.01100100
Subnet Mask: 11111111.11111111.11111111.11100000

Network Addr: 11000000.10101000.00000001.01100000
This gives 192.168.1.96 in decimal as the network address.
For a /27 subnet, each segment (or subnet) has 32 IP addresses (2
5
).
The range of this network segment is from 192.168.1.96 to 192.168.1.127.
Week 7 – Host your website on GitHub
Assignment 7.1: Getting your site ready

In assignment 6.4 you created a website. In your website directory, you'll also find a subdirectory
called pdf. Copy the finished templates of the practical assignments in here. The following files need
to be placed in the pdf directory.

    week1.pdf
    week2.pdf
    week3.pdf
    week4.pdf
    week5.pdf
    week6.pdf
    week7.pdf

Don't rename these files.

If you do rename these files you need to edit the html code.
Assignment 7.2: GitHub pages

Upload and host this site on GitHub. Watch this video how to accomplish this:

https://www.youtube.com/watch?v=OltY8JIaP- 4
Assignment 7.3: Complete the practical assignment

    ZIP your entire website. Including all html, css, images and pdf template files.
    Include a text file in this ZIP archive where we can find your domain name of your website
    on Github.
    Upload this ZIP file to Brightspace at the submission point for the practical assignment.
    In the lessons of week 8, show the teacher your website that runs on Github. You can expect
    some random questions from the teacher, so be prepared.
    Keep the website online during lesson week 2.8 till the end of lesson week 2. 10 so that the
    teacher can take another look at it if necessary for a plagiarism check, for example.
    In the weekend of lesson week 2.10, you may take the website offline.

~THE END~
