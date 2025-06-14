#include <stdio.h>
int main(void)
{
	int t,x,y,z;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&x,&y,&z);
	    if(y==z)
	    {
	        printf("%d\n",x);
	    }
	    else
	    {
	        int cnt=0;
	        if((y%z)==0)
	        {
	            cnt=(y/z)*x;
	        }
	        else
	        {
	            cnt=((y/z)+1)*x;
	        }
	        printf("%d\n",cnt);
	    }
	}
	return 0;
}