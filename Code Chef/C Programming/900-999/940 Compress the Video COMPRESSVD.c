#include <stdio.h>
int main(void)
{
	int t,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&n);
	    int a[n],cnt=0,prev=0;
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&a[j]);
	        if(a[j]==prev)
	        {
	            cnt++;
	        }
	        prev=a[j];
	    }
	    printf("%d\n",n-cnt);
	}
	return 0;
}
