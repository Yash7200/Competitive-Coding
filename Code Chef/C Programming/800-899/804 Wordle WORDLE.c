#include <stdio.h>
int main(void)
{
	int T;
	scanf("%d",&T);
	for(int i=0;i<T;i++)
	{
	    char s[5],t[5];
	    scanf("%s %s",s,t);
	    for(int j=0;j<5;j++)
	    {
	        if(s[j]==t[j])
	        {
	            printf("G");
	        }
	        else
	        {
	            printf("B");
	        }
	    }
	    printf("\n");
	}
	return 0;
}