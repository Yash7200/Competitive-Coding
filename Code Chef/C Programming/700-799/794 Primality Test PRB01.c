#include <stdio.h>
int main(void)
{
	int t,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&n);
	    int cnt=0;
	    for(int j=1;j<=(n/2);j++)
	    {
	        if(n%j==0)
	        {
	            cnt++;
	        }
	    }
	    if(cnt==1)
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
