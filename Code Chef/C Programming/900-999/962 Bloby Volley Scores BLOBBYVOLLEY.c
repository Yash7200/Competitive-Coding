// server wins --> score + 1, same server-reciver
// receiver wins --> nothing, server-receiver changing

// n --> no. of turns

// start with 0 & play 'N' turns
// a --> score of 'A'
// b --> score of 'B'
// p --> temporary variable indicating who is server

// we will receive string input.
// each character will get compared.

// there will be 4 scenarios:
//1. 'A' wins 'A' was server.
//2. 'A' wins 'B' was server.
//3. 'B' wins 'A' was server.
//4. 'B' wins 'B' was server.

// to indicate individual score we have 2 variables 'a' & 'b'
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,a=0,b=0;
	    scanf("%d",&n);
	    char s[n],p='A';
	    scanf("%s",s);
	    for(int j=0;j<n;j++)
	    {
	        if( (s[j]=='A') && (p=='A') )
	        {
	            a++;
	        }
	        else if( (s[j]=='A') && (p=='B') )
	        {
	            p='A';
	        }
	        else if( (s[j]=='B') && (p=='B') )
	        {
	            b++;
	        }
	        else if( (s[j]=='B') && (p=='A') )
	        {
	            p='B';
	        }
	    }
	    printf("%d %d\n",a,b);
	}
	return 0;
}