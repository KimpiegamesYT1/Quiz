IT Fundamentals
How a computer works
Week 2:
Logic
Agenda
Agenda
Agenda

    Logic
    Chips
    Binary calculations
    Number systems review
    Bitwise operators
    The assignment

Logic
Boolean logic
1 0, on off,
true false
Logic gates
Digital
circuits
Logic
Problem-solving skills :

Logicisafundamentalconceptincomputerscience
thathelpsusreasonandsolveproblemseffectively.
It involves using symbols to represent statements
thatcanbetrueorfalse,alongwithconnectiveslike
AND,OR,andNOTtocombinethesestatements.
Inpractice,logic iscrucial fordesigningalgorithms,
which are step-by-step procedures for solving
problems, and for programming, where it controls
the flow of a program through conditional
statements.
Logic also plays a key role in artificial intelligence,
helping computers make decisions based on data.
Overall, understanding logic enhances critical
thinking and problem-solving skills, making it
essentialforanyonestudyingcomputerscience.

Group activity: logic puzzle

Make groups of two or three.

Solve the following logic puzzle:

    A farmer wants to cross a river and
    take with him a wolf, a goat, and a
    cabbage.
    There is a boat that can fit himself
    plus either the wolf, the goat, or
    the cabbage.
    If the wolf and the goat are alone
    on one shore, the wolf will eat the
    goat. If the goat and the cabbage
    are alone on the shore, the goat
    will eat the cabbage.
    How can the farmer bring the wolf,
    the goat, and the cabbage across the
    river?

Boolean logic
True/False:

Booleanlogicisabranch ofalgebrathat dealswith
trueorfalsevalues,typicallyrepresentedas 1 (true)
and 0 (false). It forms the foundation of modern
digital computer logic and is used in various fields
like computer science, electronics, and
mathematics. The key operations in Boolean logic
includeAND,OR, andNOT,whichcanbecombined
tocreatecomplexlogicalexpressions.

Boolean logic was invented by the mathematician
GeorgeBoole inthemid- 19 thcentury.Hisworklaid
the groundwork for the development of digital
circuits and programming languages, significantly
influencingthewaycomputersoperatetoday.

Boolean logic
True/False:

Boolean logic is fundamental to computers in
severalways:
Digital Circuit Design: Logic gates are the building
blocks of digital circuits, allowing computers to
performbasiclogicaloperations.
Binary Number System: Computers use the binary
system ( 0 s and 1 s) to represent and manipulate
data, with Boolean logic governing these
operations.
Programming: Boolean logic is used in conditional
statements (like if and while) in programming
languagestocontroltheflowofexecutionbasedon
true/falseconditions.
Search Algorithms: Databases and search engines
use Boolean logic to filter and retrieve data
effectively.

Logic gates
NOT:
The NOT gate, also known as an
inverter, is a fundamental logic gate in
digital electronics that performs a
single operation: it reverses the input
signal. In other words, it takes a binary
input andoutputstheoppositevalue.
Logic gates
AND:
The AND gate is a fundamental logic
gate in digital electronics that outputs
a truesignal( 1 ) onlywhenallits inputs
aretrue ( 1 ). If anyinput is false( 0 ), the
outputisfalse ( 0 ).
Logic gates
OR:
The OR gate is a fundamental logic
gate in digital electronics that outputs
a true signal ( 1 ) when at least one of
its inputs is true ( 1 ). If all inputs are
false( 0 ),theoutputis false( 0 ).
Logic gates
XOR:
The XOR (exclusive OR) gate is a
fundamental logic gate in digital
electronics that outputs a true signal
( 1 ) when exactly one of its inputs is
true ( 1 ). If both inputs are false ( 0 ) or
both are true ( 1 ), the output is false
( 0 ).
Logic gates
NAND:
The NAND (NOT AND) gate is a
fundamental logic gate in digital
electronics that outputs a false signal
( 0 ) only when allits inputs aretrue ( 1 ).
In all other cases, the output is true
( 1 ).
Essentially, the NAND gate is the
inverseoftheAND gate.
Logic gates
NOR:
The NOR (NOT OR) gate is a
fundamental logic gate in digital
electronics that outputs a true signal
( 1 ) only when all its inputs are false
( 0 ). If at least one input is true ( 1 ), the
outputisfalse ( 0 ).
Essentially, the NOR gate is the inverse
oftheORgate.
Logic gates
XNOR:
The XNOR (exclusive NOR) gate is a
fundamental logic gate in digital
electronics that outputs a true signal
( 1 ) when both inputs are the same,
meaning either both are true ( 1 ) or
both are false ( 0 ). If the inputs differ,
theoutputisfalse ( 0 ).
XNOR gates are commonly used in
digital circuits for operations where
equality is checked, such as parity
checkinganderror detection.
The XNOR gate can be thought of as the
inverseoftheXORgate.
Logic gates
Universal logic gates:
NAND gates are widely used in digital
circuits because they are universal
gates, meaning that any other logic
gate (AND, OR, NOT, XOR, etc.) can be
constructedusing onlyNANDgates.
NOR gates are universal gates,
meaning that they can be combined to
create any other type of logic gate
(AND, OR, NOT, XOR, etc.). NOR gates
are particularly useful in situations
where simplicity and compactness in
circuitdesign areneeded.
Digital circuits
Combining logic gates:
Combining logic gates allows designers
to create circuitsthat perform complex
functions efficiently. Understanding
how to interconnect these gates is
crucial for building digital systems,
ranging from simple logic devices to
advanced computationalarchitectures.
Remember that NAND gates are
considered universal gates. What kind
of circuit has been created here with
threeNANDgates?

Create a digital logic circuit for the

following problem:

You can drive a car when you have a

driver’s license AND are sober OR your

name is BOB.
Activity
Chips
Transistors
Integrated
circuits (ICs)
SR latches
Flip flops
Encapsulation
Chips
Transistors:

Transistorsarevitalforcomputersbecausetheyact
as electronic switches that represent the binary
states 1 and 0. Transistors are the fundamental
components oflogic gates. Byarranging transistors
in specific ways, we cancreate AND, OR, NOT, and
other gates, each performing essential logical
operations.Thesegates arethencombinedtobuild
complexcircuitsandintegratedcircuits, whichform
thebackbone ofallmodern computingsystems.By
combining them into larger circuits, they form the
foundation for complex systems like CPUs, GPUs,
and memory, making modern computing
technology feasible. Through this structure,
transistors allowcomputers toprocess binary data,
perform calculations, and manage digital
information.

Chips
Integrated circuits (ICs):

Integrated circuits (ICs) are tiny, highly efficient
electronic circuits where millions (or even billions)
of components like transistors, resistors, and
capacitors are embedded on a single chip of
semiconductormaterial,typicallysilicon.Bypacking
these components onto one compact chip, ICs
allow for incredible miniaturization, high-speed
performance,andreliabilityinelectronicdevices.

ICs are the core technology behind modern
electronics, found in everything from computers
and smartphones to medical equipment and
automotive systems.They enabledigitalprocessing
in microprocessors and data storage in memory
chips.

Chips
SR Latch:

An SR latch (Set-Reset latch) is a basic type of
sequentiallogic circuitusedin digitalelectronics to
store one bit of information. It has two stable
states.TheSRlatchiscommonlyimplementedwith
either NOR gates or NANDgates andis oftenused
as a basic building block in flip-flops and other
memorydevices.

The SR latch is a building block for RAM memory
circuits.AlthoughmodernRAMtypically usesmore
complexarrangements,thefundamentalconceptof
an SR latch—storing one bit of data—forms the
basisforthesemorecomplexmemorystructures.

Chips
JK Flip flops:

The main issue with an SR latch is that it can get
stuck in an invalid state. This happens when both
theSet(S)andReset(R)inputsareturnedon(both
are 1 ).

TheJKflip-flopsolvesthisprobleminafewways:
Toggles Output: When both inputs J and K are on
(bothare 1 ),insteadofgettingstuck,theJKflip-flop
togglestheoutput.
Clock Control: The JK flip-flop works with a clock
signal, which means it only changes its state at
specific times. This keeps everything running
smoothly.
DefinedOutputs: TheJKflip-flopalwayshasaclear
output for every combination of inputs, so there
arenoinvalidstateslikeintheSRlatch.

J
K

Clock
Q
Q

Do you recognise the SR latch in this picture?

Chips
Encapsulation:

Encapsulation in digital electronics refers to the
idea of combining simpler components to create
more complex circuits, while treating the simpler
components as "building blocks" with specific
functions. This makes it easier to design complex
circuits by breaking them down into manageable
parts.

Indigitalcircuits,youstartwithsimplecomponents
(like AND, OR, and NOT gates), which you can
combineto createslightly morecomplexparts (like
SRlatches ),andthenusethosepartsto makeeven
more complex devices (like JK flip-flops ). This
process of combining components allows us to
designsophisticatedsystems(like microprocessors )
frombasicparts.

7402 IC – Four NOR gates in one chip
Chips
Microprocessors:

A microprocessor is a small, integrated circuit (IC)
thatservesas thecentralprocessingunit(CPU)ofa
computer or other digital device. It performs the
core functions of a computer, including processing
data, executing instructions, and controlling
input/output operations.Microprocessorsinterpret
and carry out instructions from software by
performingbasicarithmetic,logic,control,anddata
transferoperations.

Microprocessors are found in a wide variety of
devices,from personal computers to smartphones,
embedded systems, and many other electronic
systems, enabling them to function and perform
tasks.

Chips
6502 Microprocessor:

The 6502 microprocessor, designed by Chuck
Peddleandhisteamat MOSTechnology in 1975 ,is
an 8 - bitCPU known forits low cost, simplicity, and
efficiency. It became widely used in early personal
computerslikethe AppleII and Commodore 64 ,as
wellasgamingconsoles suchasthe Atari 2600 and
NintendoEntertainmentSystem (NES).

Witha 16 - bitaddressbussupportingupto 64 KBof
memoryand areduced instruction set, it was easy
to program and accessible to hobbyists. Its simple
designmade itan iconic partof computing history,
especiallyinretro-computingcirclestoday.

6502 microprocessors are still being produced by
WesternDesignCenter.

Chips
Z 80 Microprocessor:

The Zilog Z 80 processor, introduced in 1976 by
Zilog, is an 8 - bit CISC (Complex Instruction Set
Computing) microprocessor that became highly
popular due to its affordability, power, and
compatibility with the Intel 8080. Widely used in
early personal computers like the TRS- 80 and ZX
Spectrum , as well as in arcade machines and
embeddedsystems,theZ 80 playedakeyroleinthe
earlyhomecomputerrevolution.

With its expanded instruction set and enhanced
performance overthe 8080 , the Z 80 was easier to
program and became a favorite for hobbyists and
educational systems. Zilog discontinued the Z 80 in
June 2024 .But the Zilog eZ 80 is binary compatible
withtheZ 80 andisstillproducedtoday.

Chips
Motorola 68000 Microprocessor:

TheMotorola 68000 processor, introducedin 1979 ,
is a 16 / 32 - bit CISC (Complex Instruction Set
Computing) architecture known for its powerful
performance and versatility. It was widely used in
earlypersonalcomputerslikethe AppleMacintosh ,
Amiga , and Atari ST , as well as in embedded
systemsandgameconsoleslikethe SegaGenesis.

The 68000 ’s 32 - bit internal architecture with a 16 -
bit data bus allowed it to perform advanced
computing tasks efficiently. It became popular for
its rich instruction set and easy programming
model.Although its usein personal computing has
declined,the 68000 familyhasremainedinfluential
in embedded systems, automotive control, and
industrialapplications.

Chips
Intel x 86 Microprocessor:

The Intel x 86 processor architecture, introduced
with the Intel 8086 in 1978 , is a CISC (Complex
InstructionSet Computing)designthatbecame the
foundationformodernpersonalcomputers.Known
forits backwardcompatibility andversatility,it has
evolved through multiple generations, from early
16 - bitversionstotoday's 64 - bitprocessors.

x 86 's architecture has powered a wide range of
devices,from early PCs likethe IBMPC to modern
desktops,laptops,andservers.Itsupportsarich set
of instructions, allowing complex tasks to be
performed in fewer steps. The x 86 family remains
dominant in personal computing and enterprise
systemstoday.

Chips
PowerPC Microprocessor:

The PowerPC processor, developed in the early
1990 sby IBM , Motorola ,and Apple underthe AIM
alliance, is a RISC (Reduced Instruction Set
Computing) architecture known for its high
performance and scalability. Initially designed for
personal computers, it was used in Apple's
Macintosh line, aswellasin IBMworkstations and
servers.

PowerPC's architecture supports both 32 - bit and
64 - bitcomputing,making itversatilefor arangeof
applications,fromdesktopcomputerstoembedded
systems and game consoles like the Nintendo
GameCube and Sony PlayStation 3. PowerPC
remains influential in embedded systems,
aerospace,andsupercomputers.

Chips
ARM Microprocessor:

The ARM processor was designed by Acorn
Computersinthe 1980 s,withleaddesignersSophie
Wilson and Steve Furber. Known for its efficiency,
low power consumption, and RISC (Reduced
Instruction Set Computing) architecture, ARM
became widely used in mobile devices, embedded
systems, and modern smartphones. Its 32 - bit and
later 64 - bit architectures allow for simplified
instructionsthatexecutequickly,makingARMideal
forenergy-sensitiveapplications.

Theprocessor's designfocuses onpowerefficiency
andhigh performance per watt, contributing to its
dominanceinportable electronics.ARMprocessors
are used in billions of devices worldwide, from
smartphones,tabletsandIoTdevicestolaptops.

Examine the Computer history timeline:

https://www.computerhistory.org/timeline/computers/

Try to find a computer that uses the

following processor:

    6502
    68000
    Z80
    PowerPC
    ARM

Write in your answer:

    Computer model
    Year introduced

Activity
Binary calculations
Adding Multiplying
Negative
numbers
Two’s
complement
Binary calculations
Adding:

Addingbinary numbersissimilartoaddingdecimal
numbers,butitusesonlytwodigits: 0 and 1 .Here’s
astep-by-stepguidetohelpyou understandhowit
works:

1. BinaryDigits: Useonly 0 and 1.

2 .AdditionRules: 0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 0 (carry 1 )
1 + 1 + 1 = 1 (carry 1 )

3. Carrying: When the sum of two bits is 2 ( 10 in
binary), write down 0 and carry 1 to the next
column.

Example:
1011
+ 1101
--------
0
1
0
1
0
1
11
11
+ 13
-----
24
Binary Decimal
Binary calculations
Multiplying:

Binary multiplication is like multiplying
numbersindecimal,butitonlyuses 0 sand 1 s.
First, you write the two numbers down, with
one on top and the other below. You then
multiplyeachbitofthebottomnumberbythe
whole top number. If the bit is 1 , you write
downthetop number;ifit’s 0 ,youwritedown
zeros. After that, you shift the results to the
left for each bit you just multiplied, similar to
howyouwoulddoindecimal.
Finally, you add all these results together to
get the final answer. For example, multiplying
101 (which is 5 ) by 11 (which is 3 ) gives you
1111 (whichis 15 ).

Example:
101
× 11
------
101
+ 1010
------
1111
5
× 3
-----
15
Binary Decimal

Add the following binary numbers:

1011 + 1010

1110 + 0010

Multiply the following numbers:

1001 × 0010

101 × 100
Activity
Binary calculations
Negative numbers:

In binary, negative numbers are commonly
represented using the two's complement system ,
wherethemostsignificantbit(theleftmostbit)acts
asthe signbit: 0 indicatesapositive number,while
1 indicates a negative number. In this system, to
convert a positive number to its negative
counterpart,youinvertallthebitsandadd 1 tothe
result.
Signednumbers usethissign bittorepresent both
positive and negative values, allowing for a range
from- 2 n-^1 to 2 n-^1 - 1 inann-bitsystem.
Unsignednumbers ,on the other hand, useall bits
for magnitude only, meaning they only represent
positive values from 0 to 2 n- 1 .Two's complement
allows efficient arithmetic operations with both
positiveandnegativenumbers.

Binary calculations
Two’s complement:

To convert 5 to - 5 in a 4 - bit two's
complement system, first write 5 in binary as
0101. Then, invert all the bits, changing 1 sto
0 sand 0 sto 1 s,resultingin 1010.

Next, add 1 to this inverted binary number,
whichgives 1011 .Thisfinal result,is thetwo's
complement representation of - 5 in 4 - bit
binary.

To verify, invert 1011 back to 0100 , add 1 to
get 0101 (whichis 5 ).

Example:
Signed binary numbers:
0101 = 0 + 4 + 0 + 1 = 5
1011 = -8 + 0 + 2 + 1 = - 5
1111 = -8 + 4 + 2 + 1 = - 1
Unsigned binary numbers:
101 = 5
1010 = 10
1111 = 15

If not stated in the assignment,
assume unsigned binary numbers.

    Use the two’s complement system

to calculate the binary negative
numbers of:

    10
    14
    7

Activity
Number systems review
Decimal

0123456789

Binary

0 1

Octal

01234567

Hexadecimal

0123456789ABCDEF

Divide by 2 :

Converting a decimal number to binary involves
dividing the decimal number by 2 and recording
the remainders.

Steps to Convert Decimal to Binary:

    Divide the decimal number by 2.
    Record the remainder (it will be either 0 or 1).
    Divide the quotient (the result of the division)
    by 2 again.
    Repeat the process until the quotient becomes 0.
    Read the remainders from bottom to top to get the
    binary equivalent.

Example: Convert Decimal 19 to Binary

    19 ÷ 2 = 9, remainder 1
    9 ÷ 2 = 4, remainder 1
    4 ÷ 2 = 2, remainder 0
    2 ÷ 2 = 1, remainder 0
    1 ÷ 2 = 0, remainder 1

Now, reading the remainders from bottom to top,

the binary representation of 19 is 10011.
Number systems review
Binary number to base 10 :

To convert a binary number to decimal , follow
these steps:

Steps to Convert Binary to Decimal:

1. Write down the binary number and label the
positions of each digit, starting from the right.
The rightmost digit is in the 20 (ones) place,
the next digit is in the 21 (twos) place, then 22
(fours) place, and so on.
2. Multiply each binary digit by 2 n, where n is
the position of the digit, starting from 0 on the
right.
3. Add all the values together to get the decimal
equivalent.

2 x =
210 1024
29 512
28 256
27 128
26 64
25 32
24 16
23 8
22 4
21 2
20 1

1 0 1 0

×
0 × 1 = 0

1 × 2 = 2

0 × 4 = 0

1 × 8 = 8

+
10

Number systems review
Octal to binary:

To convert an octal number (base-8) to binary
(base-2), you can follow a straightforward
process because each octal digit corresponds
to exactly 3 binary digits (since 23 = 8).

Steps to Convert Octal to Binary:

    Write down the octal number.
    Convert each octal digit to its 3-bit binary
    equivalent.
    Combine all the binary groups to get the
    final binary number.

Octal Digit Binary Equivalent
0 000
1 001
2 010
3 011
4 100
5 101
6 110
7 111

Example: Convert Octal 157 to Binary
✓ Convert each octal digit to binary:

    1 in octal = 001 in binary.
    5 in octal = 101 in binary.
    7 in octal = 111 in binary.
    ✓ Combine the binary groups:
    001 101 111
    So, the octal number 157 is 001101111 in binary.

Number systems review
Hexadecimal to binary:

To convert a hexadecimal number (base-16)
to binary (base-2), follow a simple process
because each hexadecimal digit corresponds
to exactly 4 binary digits (since 24 = 16).

Steps to Convert Hexadecimal to Binary:

1. Write down the hexadecimal number.
2. Convert each hexadecimal digit to its 4-bit
binary equivalent.
3. Combine all the binary groups to get the final
binary number.

Example: Convert Hexadecimal 1A3 to Binary

✓ Convert each hexadecimal digit to binary:

    1 in hexadecimal = 0001 in binary.
    A in hexadecimal = 1010 in binary.
    3 in hexadecimal = 0011 in binary.
    ✓ Combine the binary groups:
    0001 1010 0011

So, the hexadecimal number 1A3 is
000110100011 in binary.
Number systems review

    Convert the hexadecimal number to

binary:

    FF
    A0
    8C
    Convert the binary number to

octal and hexadecimal:

    1101
    Convert the decimal number to an

8 - bit binary number:

    195

Activity
Bitwise operators
AND & OR | XOR ^ NOT ~
Bitwise operators
AND & :
The bitwise AND operator (&) in Java
performs an AND operation on each
corresponding bit of two integers,
resultingin a new number. Foreach bit
position, if both bits are 1 , the result
will also have a 1 in that position; if
eitheror both bits are 0 , the result will
have a 0 .This operator worksat thebit
level and requires two integer
operandsto function.

Number1 0 1 0 1
Number2 0 0 1 1
Result 0 0 0 1

&

int a = 5; // 0101
int b = 3; // 0011
int result = a & b; // ----&
System.out.println(result); // 0001
Bitwise operators
OR | :
The bitwise OR operator (|) in Java
performs an OR operation on each
corresponding bit of two integers,
resultingin a new number. Foreach bit
position, if either or both bits are 1 ,
theresultwill have a 1 in thatposition;
if both bits are 0 , the result will have a
0. This operator works at the bit level
and requires two integer operands to
function.
|

int a = 5; // 0101
int b = 3; // 0011
int result = a | b; // ----|
System.out.println(result); // 0111

Number1 0 1 0 1
Number2 0 0 1 1
Result 0 1 1 1

Bitwise operators
XOR ^ :
The bitwise XOR operator (^) in Java
performs an exclusive OR operation on
each corresponding bit of two
integers, resulting in a new number.
Foreach bit position,if only one of the
bits is 1 (but not both), the result will
have a 1 in that position; if both bits
are 0 or both are 1 , theresult willhave
a 0. Thisoperator works at thebit level
and requires two integer operands to
function.
^

int a = 5; // 0101
int b = 3; // 0011
int result = a ^ b; // ----^
System.out.println(result); // 0110

Number1 0 1 0 1
Number2 0 0 1 1
Result 0 1 1 0

Examine the Bitwise operators:

    Bitwise operator: AND
    Bitwise operator: OR
    Bitwise operator: XOR

Activity
Bitwise operators
NOT ~ :

    Flipthebits

int number = 5; // 0101
int result = ~number; // 1010
System.out.println(result); // - 6

Number 0 1 0 1
Result 1 0 1 0

~
Bitwise operators
NOT ~ + 1 :
Two’scomplement

    Flipthebits
    Add 1

int number = 5; // 0101
int result = ~number + 1; // 1010 + 0001
System.out.println(result); // - 5

Number 0 1 0 1
Result 1 0 1 1

~ + 1
Activity

Examine the Bitwise operators:

    Bitwise operator: NOT ~
        Examine this slide and this slide
        Implement the two’s complement system
        in here.

Bitwise operators
Left bit shifting << :
Left bit shifting in Java by 1 bit means
shifting all bits of a binary number to
theleft by one position. This operation
effectively multiplies the number by 2 ,
as each shift to the left represents a
doubling ofthevalue.

Value 0 0 1 1
Shift 0 1 1 0

<< 1

int value = 3; // 0011
int shift = value << 1; // Left shift 1 bit
System.out.println(shift); // 0110 = 6
Bitwise operators
Right bit shifting >> :
Right bit shifting in Java by 1 bit
involves shifting all bits of a binary
number to the right by one position.
This operation effectively divides the
number by 2 , discarding any fractional
part.

Value 0 1 1 0
Shift 0 0 1 1

        1

int value = 6; // 0110
int shift = value >> 1; // Right shift 1 bit
System.out.println(shift); // 0011 = 3
Activity

Examine the Bitwise operators:

    Bitwise operator: Left bit shifting
        Modify the code so that it is
        the same as in the example in
        this PowerPoint. See this slide.
    Bitwise operator: Right bit shifting
        Modify the code so that it is
        the same as in the example in
        this PowerPoint. See this slide.

The assignment
Logic gates
Integrated
circuits (ICs)
Binary
calculations
Bitwise
operators

    Do the practical assignments of

week 2 found on Brightspace
The Assignment

    Read chapters 4 & 5 of the book

Homework

Next week’s topics include:

    Computer hardware
    CPU
    Main memory / Storage
    Bus communication

Do your homework !!!

Read the book !!!

See you next week
