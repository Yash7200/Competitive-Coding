#include <stdio.h>
int main(void)
{
	int t,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&n);
	    int a[n],b[n],cnt=0;
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&a[j]);
	    }
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&b[j]);
	    }
	    for(int j=0;j<n;j++)
	    {
	        if(a[j]==b[j])
	        {
	            cnt++;
	        }
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}
