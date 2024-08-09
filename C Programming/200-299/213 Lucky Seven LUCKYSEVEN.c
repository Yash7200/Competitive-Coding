//Problem Simplification:
    //7 is lucky number of Chef
    //Chef sees 7th letter of a word
    //Word is having length of 10

//Logic:
    //create string array of 10 length
    //Take input of string
    //print 6th index because indexing starts with 0

#include <stdio.h>
int main(void)
{
    char s[10];
    scanf("%s",s);
    printf("%c",s[6]);
	return 0;
}