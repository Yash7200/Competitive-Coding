#include <stdio.h>
int main(void)
{
	int t,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&n);
	    int h[n];
	    int cnt=0;
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&h[j]);
	        if(h[j]==6||h[j]==13||h[j]==20||h[j]==27||h[j]==7||h[j]==14||h[j]==21||h[j]==28)
	        {
	            cnt++;
	        }
	    }
	    if(cnt==n)
	    {
	        printf("8\n");
	    }
	    else
	    {
	        printf("%d\n",(8+(n-cnt)));
	    }
	}
	return 0;
}
