//Problem Simplification:
    //20 Officers who processes same no. of application same time
    //find no. of applications which can not be processed
    //no. of application can be 10^100

//Logic:
    //long long int can not store integer with length of 10^100 so we'll store entire integer in string & find modulo of last 2 digits with 20
//20 officers
//n --> no. of application for linking PAN
#include <stdio.h>
#include <string.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    char s[100];
	    scanf("%s",s);
	    int n;
	    if(strlen(s)==1)
	    {
	        n=s[0]-48;
	    }
	    else
	    {
	        n=(10*(s[strlen(s)-2]-48))+(s[strlen(s)-1]-48);
	    }
	    printf("%d\n",n%20);
	}
	return 0;
}