<? php
$file = @file('counter.txt');
$count = @implode('', $file);
$count++;
$myFile = fopen('counter.txt', 'w');
fputs($myFile, $count);
fclose($myFile);