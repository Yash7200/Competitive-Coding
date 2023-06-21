//2 sister A & B play piano every day.
//during single day they can play in any order.

//Both of them play exactly once per day.

//we will be given log of playing piano check if it is valid or not
// log will be invalid if someone played piano twice.
// so we'll compare even character with odd character if it is same,
// then it is not valid otherwise valid
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
	    int n=strlen(s),valid=1;
	    for(int j=1;j<n;j=j+2)
	    {
	        if( s[j]!=s[j-1] )
	        {
	            continue;
	        }
	        else
	        {
	            valid=0;
	            break;
	        }
	    }
	    if(valid==1)
	    {
	        printf("yes\n");
	    }
	    else
	    {
	        printf("no\n");
	    }
	}
	return 0;
}