#include <stdio.h>
int main(void)
{
	int t,x,y,k;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d",&x,&y,&k);
	    if(x==y)
	    {
	        printf("0\n");
	    }
	    else
	    {
	        int cnt=0;
	        if(x<y)
	        {
	            for(int j=0;j<4000;j++)
	            {
	                x=x+k;
	                cnt++;
	                if(x>=y)
	                {
	                    break;
	                }
	            }
	            printf("%d\n",cnt);
	        }
	        else
	        {
	            for(int j=0;j<4000;j++)
	            {
	                x=x-k;
	                cnt++;
	                if(x<=y)
	                {
	                    break;
	                }
	            }
	            printf("%d\n",cnt);
	        }
	    }
	}
	return 0;
}