//Karan begun to look for occurences of '4' in every digit

// we can have any length of integer so we will store input as string and look for '4'
#include <stdio.h>
#include <string.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    char s[99];
	    scanf("%s",&s);
	    int cnt=0;
	    for(int j=0;j<strlen(s);j++)
	    {
	        if(s[j]=='4')
	        {
	            cnt++;
	        }
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}