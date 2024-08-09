//Problem Simplification:
    //10 pages in newspaper
    //last 3 pages(8,9,10) are for sports section
    //determine if given page number denots to sports section or not
    //Print "YES" if it belongs & "NO" if it doesn't belong

//Logic:
    //Declare variable 'x'
    //store input in it
    //If page numbers are from 8,9,10 then print "YES"
    //otherwise print "NO"
#include <stdio.h>
int main(void)
{
	int x;
	scanf("%d",&x);
	if(x>7)
	{
	    printf("YES\n");
	}
	else
	{
	    printf("NO\n");
	}
	return 0;
}