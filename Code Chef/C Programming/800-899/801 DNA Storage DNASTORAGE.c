#include <stdio.h>
int main(void)
{
	int t,size;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&size);
	    char n[size];
	    scanf("%s",n);
	    for(int j=0;j<size;j+=2)
	    {
	        if((n[j]=='0')&&(n[j+1]=='0'))
	        {
	            printf("A");
	        }
	        else if((n[j]=='0')&&(n[j+1]=='1'))
	        {
	            printf("T");
	        }
	        else if((n[j]=='1')&&(n[j+1]=='0'))
	        {
	            printf("C");
	        }
	        else if((n[j]=='1')&&(n[j+1]=='1'))
	        {
	            printf("G");
	        }
	    }
	    printf("\n");
	}
	return 0;
}
