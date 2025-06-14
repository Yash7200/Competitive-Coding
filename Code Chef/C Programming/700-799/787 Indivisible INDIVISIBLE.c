#include <stdio.h>
int main(void)
{
	int t,a,b,c;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&a,&b,&c);
	    int cnt=2;
	    while(1)
	    {
	        if(a%cnt==0||b%cnt==0||c%cnt==0)
	        {
	            cnt++;
	        }
	        else
	        {
	            break;
	        }
	    }
	    printf("%d\n",cnt);
	    
	}
	return 0;
}
