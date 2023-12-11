---
layout: post
toc: false
description:
courses: { csp: {week: 14} }
permalink: guessing
type: Arcade
---


## Here is the one and only guide you need to understand binary!

>### How does binary work? 
>- The binary system is a way of representing data using 0s and 1s. This system is used by computers to represent all the data it works with. To compute a number in this system, you would multiply the digit value by the place value, then add them all together.

>### How to convert binary to decimal:

>- Step 1: Write the binary number and count the powers of 2 from right to left (starting from 0).
<br><br>

>- Step 2: Write each binary digit(right to left) with corresponding powers of 2 from right to left, such that MSB or the first binary digit will be multiplied by the greatest power of 2.
<br><br>

>- Step 3: Add all the products in the step 2
<br><br>

>- Step 4: The answer is our decimal number.

>#### Here are some examples:
<br>
![]({{site.baseurl}}/images/binary.PNG)
<br><br>

>- Binary is represented in (xxxx)2 and decimal in (xxxx)10 format.

<br><br>
![]({{site.baseurl}}/images/binary2.PNG)
<br><br>

>- Binary numbers are read by separating them into separate digits. Each digit in binary is represented using 0 and 1 and they are the powers of 2 starting from left hand side and then the power is gradually increased from 0 to (n-1).
<br><br>

![]({{site.baseurl}}/images/binary3.PNG)

>### How to convert decimal to binary: 

>- Step 1: Divide the given decimal number by 2, and find the remainder (Ri).
<br><br>

>- Step 2: Now divide the quotient (Qi) that is obtained in the above step by 2, and find the remainder.
<br><br>

>- Step 3: Repeat the above steps 1 and 2, until 0 is obtained as a quotient.
<br><br>

>- Step 4: Write down the remainder in the following manner: the last remainder is written first, followed by the rest in the reverse order (Rn, R(n – 1) …. R1). thus binary conversion of the given decimal number will be obtained.

>#### Here are some examples: 
<br>
![]({{site.baseurl}}/images/decimal.png)
<br><br>

>- The number system that has a base value of 10 is called Decimal Number System. Decimal Numbers are consist of the following digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.

<br><br>
![]({{site.baseurl}}/images/decimal2.png)
<br><br>

>- All the decimal numbers have their corresponding binary numbers. These binary numbers are used in computer applications and used for programming or coding purposes. This is because binary digits, 0 and 1 are only understood by computers.

<br><br>
![]({{site.baseurl}}/images/decimal3.png)


>### Practice your binary conversions here! 

[Binary to Decimal Converter](https://alishahussain.github.io/team2//binary-to-decimal-convert)

>### Practice your decimal conversions here!

[Decimal to Binary Converter](https://alishahussain.github.io/team2//decimal-to-binary-convert)

###  hexadecimal guide (decimal, binary), then add a guessing game that could potentially have all 4 options
-------------------------
>### How to Convert Decimal to Hexadecimal

>- The hexadecimal number system is a system in which numbers are expressed in the base 16. In the hexadecimal number system, the numbers are represented in terms of 0-9 and A – F. The hexadecimal number is written as number H, (number)16, (number)H. Example: (A23F)16,
<br><br>

>- Step 1: Take the decimal number as dividend and 16 as the divisor (hexadecimal number will have 16 as a base)
<br><br>

>- Step 2: Divide the dividend with the divisor and store the remainder in an array
<br><br>

>- Step 3: Now divide the quotient obtained from the above step by 16 and store the remainder in the array.
<br><br>

>- Step 4: Repeat the third step until the number is greater than zero.
<br><br>

>- Step 5: The final hexadecimal value will be the reverse order of the array.
<br><br>
![]({{site.baseurl}}/images/dechexadec.png)
<br><br>

>- This picture includes an example of a decimal (2545) converted into hexadecimal.

<br><br>
![]({{site.baseurl}}/images/dechexadec2.png)
<br><br>

>- This example shows how you can convert into binary and then group to simplify before getting the desired hexadecimal value.
<br><br>

### How to Convert Binary to Hexadecimal

>- The Binary to Hexadecimal conversion is the same as above, as you convert from Binary to Hexadecimal in that proccess too!
<br><br>

>- Step 1: Take the decimal number as dividend and 16 as the divisor (hexadecimal number will have 16 as a base)
<br><br>

>- Step 2: Divide the dividend with the divisor and store the remainder in an array
<br><br>

>- Step 3: Now divide the quotient obtained from the above step by 16 and store the remainder in the array.
<br><br>

>- Step 4: Repeat the third step until the number is greater than zero.
<br><br>

>- Step 5: The final hexadecimal value will be the reverse order of the array.
<br><br>

<br><br>
![]({{site.baseurl}}/images/binhex1.png)
<br><br>

>- This picture shows the exact steps and shows an example of how to convert Binary to Hexadecimal
<br><br>

<br><br>
![]({{site.baseurl}}/images/binhex2.png)
<br><br>

>- This picture uses the same method, but elaborates the steps more. You can see that it shows the steps (ex. grouping, etc.)
<br><br>

>#### Practice ALL your conversions here!
[Bin, Dec, and Hex Converter](https://alishahussain.github.io/team2//hex-to-bin-and-dec)

>#### Now, apply what you've learned and play these guessing games!

>[Binary to Decimal Guessing Game](https://alishahussain.github.io/team2//binary-guessing-game)
<br><br>

>[Decimal to Binary Guessing Game](https://alishahussain.github.io/team2//decimal-guessing-game)
<br><br>

>[The ULTIMATE Binary Game](https://alishahussain.github.io/team2//b-g)

>### Binary Conversion Tables

#### These are all the Binary, Decimal, and Hexadecimal Conversion Tables!

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Table</title>
    <style>
        /* Optional: Add some basic styling for better appearance */
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

    <h2>Decimal to Binary Table</h2>

    <table>
        <thead>
            <tr>
                <th>Decimal</th>
                <th>Binary</th>
            </tr>
        </thead>
        <tbody>
            <!-- Replace the content below with your own values -->
            <tr>
                <td>0</td>
                <td>0000</td>
            </tr>
            <tr>
                <td>1</td>
                <td>0001</td>
            </tr>
            <tr>
                <td>2</td>
                <td>0010</td>
            </tr>
             <tr>
                <td>3</td>
                <td>0011</td>
            </tr>
             <tr>
                <td>4</td>
                <td>0100</td>
            </tr>
             <tr>
                <td>5</td>
                <td>0101</td>
            </tr>
             <tr>
                <td>6</td>
                <td>0110</td>
            </tr>
             <tr>
                <td>7</td>
                <td>0111</td>
            </tr>
            <tr>
                <td>8</td>
                <td>1000</td>
            </tr>
            <tr>
                <td>9</td>
                <td>1001</td>
            </tr>
            <tr>
                <td>10</td>
                <td>1010</td>
            </tr>
             <tr>
                <td>11</td>
                <td>1011</td>
            </tr>
             <tr>
                <td>12</td>
                <td>1100</td>
            </tr>
             <tr>
                <td>13</td>
                <td>1101</td>
            </tr>
             <tr>
                <td>14</td>
                <td>1110</td>
            </tr>
             <tr>
                <td>15</td>
                <td>1111</td>
            </tr>
        </tbody>
    </table>

</body>
</html>

<br><br>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Table</title>
    <style>
        /* Optional: Add some basic styling for better appearance */
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<br><br>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Table</title>
    <style>
        /* Optional: Add some basic styling for better appearance */
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

    <h2>Decimal to Hexadecimal Table</h2>

    <table>
        <thead>
            <tr>
                <th>Decimal Digit</th>
                <th>Hexadecimal Digit</th>
            </tr>
        </thead>
        <tbody>
            <!-- Replace the content below with your own values -->
            <tr>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
            </tr>
             <tr>
                <td>3</td>
                <td>3</td>
            </tr>
             <tr>
                <td>4</td>
                <td>4</td>
            </tr>
             <tr>
                <td>5</td>
                <td>5</td>
            </tr>
             <tr>
                <td>6</td>
                <td>6</td>
            </tr>
             <tr>
                <td>7</td>
                <td>7</td>
            </tr>
            <tr>
                <td>8</td>
                <td>8</td>
            </tr>
            <tr>
                <td>9</td>
                <td>9</td>
            </tr>
            <tr>
                <td>10</td>
                <td>A</td>
            </tr>
             <tr>
                <td>11</td>
                <td>B</td>
            </tr>
             <tr>
                <td>12</td>
                <td>C</td>
            </tr>
             <tr>
                <td>13</td>
                <td>D</td>
            </tr>
             <tr>
                <td>14</td>
                <td>E</td>
            </tr>
             <tr>
                <td>15</td>
                <td>F</td>
            </tr>
        </tbody>
    </table>

</body>
</html>

<br><br>


    <h2>Decimal, Binary, and Hexadecimal Table</h2>

    <table>
        <thead>
            <tr>
                <th>Decimal Digit</th>
                <th>Hexadecimal Digit</th>
                <th>Binary Form</th>
            </tr>
        </thead>
        <tbody>
            <!-- Replace the content below with your own values -->
            <tr>
                <td>0</td>
                <td>0</td>
                <td>0000</td>
            </tr>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>0001</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
                <td>0010</td>
            </tr>
             <tr>
                <td>3</td>
                <td>3</td>
                <td>0011</td>
            </tr>
             <tr>
                <td>4</td>
                <td>4</td>
                <td>0100</td>
            </tr>
             <tr>
                <td>5</td>
                <td>5</td>
                <td>0101</td>
            </tr>
             <tr>
                <td>6</td>
                <td>6</td>
                <td>0110</td>
            </tr>
             <tr>
                <td>7</td>
                <td>7</td>
                <td>0111</td>
            </tr>
            <tr>
                <td>8</td>
                <td>8</td>
                <td>1000</td>
            </tr>
            <tr>
                <td>9</td>
                <td>9</td>
                <td>1001</td>
            </tr>
            <tr>
                <td>10</td>
                <td>A</td>
                <td>1010</td>
            </tr>
             <tr>
                <td>11</td>
                <td>B</td>
                <td>1011</td>
            </tr>
             <tr>
                <td>12</td>
                <td>C</td>
                <td>1100</td>
            </tr>
             <tr>
                <td>13</td>
                <td>D</td>
                <td>1101</td>
            </tr>
             <tr>
                <td>14</td>
                <td>E</td>
                <td>1110</td>
            </tr>
             <tr>
                <td>15</td>
                <td>F</td>
                <td>1111</td>
            </tr>
        </tbody>
    </table>

</body>
</html>