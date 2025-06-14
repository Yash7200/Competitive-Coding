#include <stdio.h>
int main(void)
{
	// your code goes here
	int t,n,k,m;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d",&n,&k,&m);
	    if(n<=(k*m))
	    {
	        printf("1\n");
	    }
	    else
	    {
	        int cnt=0;
	        while(n>0)
	        {
	            n=n-(k*m);
	            cnt++;
	        }
	        printf("%d\n",cnt);
	    }
	}
	return 0;
}