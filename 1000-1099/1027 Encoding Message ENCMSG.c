// Variables:
    // n --> length of string
    // temp --> temporary variable holding character to be replaced

// Rules:
// swap position (not considering 0 as first occurrence):
 //1,2 --> 2,1
 //3,4 --> 4,3
 //5,6 --> 6,5
 //Note:if string length is odd don't swap last position

// replace:
    //a --> z
    //b --> y
    //c --> x
    //d --> w
    //e --> v
    //f --> u
    //g--> t
    //h --> s
    //i --> r
    //j --> q
    //k --> p
    //l --> o
    //m --> n
    //n --> m
    //o --> l
    //p --> k
    //q --> j
    //r --> i
    //s --> h
    //t --> g
    //u --> f
    //v --> e
    //w --> d
    //x --> c
    //y --> b
    //z --> a
// Logic:
    //Replacing all characters first won't change actual answer or output.
    //first replace all characters then do the swapping
    //Replacing is same for all lengths
    //Replacing is done by using switch-case. don't need to use break and default
    //if we observe the given rules we are swapping even occurrence with odd (after counting from 1)
    //Don't swap last occurrence if string length is odd
    //1st if condition will check for odd occurrence(which is even after counting from 1) of string as well as string length is even when it is satisfied characters will be swapped
//     2ndif condition will check both odd occurrences of string length and position. It is designed to skip swapping of last occurrence
//     Nested if condition will allow swapping of all other odd occurrence but not last occurence

#include <stdio.h>
int replace(char a)
{
    switch(a)
    {
        case 'a':
            return 'z';
        case 'b':
            return 'y';
        case 'c':
            return 'x';
        case 'd':
            return 'w';
        case 'e':
            return 'v';
        case 'f':
            return 'u';
        case 'g':
            return 't';
        case 'h':
            return 's';
        case 'i':
            return 'r';
        case 'j':
            return 'q';
        case 'k':
            return 'p';
        case 'l':
            return 'o';
        case 'm':
            return 'n';
        case 'n':
            return 'm';
        case 'o':
            return 'l';
        case 'p':
            return 'k';
        case 'q':
            return 'j';
        case 'r':
            return 'i';
        case 's':
            return 'h';
        case 't':
            return 'g';
        case 'u':
            return 'f';
        case 'v':
            return 'e';
        case 'w':
            return 'd';
        case 'x':
            return 'c';
        case 'y':
            return 'b';
        case 'z':
            return 'a';
    }
}
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n;
	    scanf("%d",&n);
	    char s[n];
	    scanf("%s",s);
	    for(int j=0;j<n;j++)
	    {
	        s[j]=replace(s[j]);
	        //when string length is even
	        if( ((j%2) != 0) && ((n%2) == 0) )
	        {
	            char temp=s[j-1];
	            s[j-1]=s[j];
	            s[j]=temp;
	        }
	       //when string length is odd & z is not last occurence
	        else if( ((j%2) != 0) && ((n%2) != 0) )
	        {
	            if( (j != (n-1)) && ((j%2) != 0) )
	            {
	                char temp=s[j-1];
	                s[j-1]=s[j];
	                s[j]=temp;
	            }
	        }
	    }
	    printf("%s\n",s);
	}
	return 0;
}