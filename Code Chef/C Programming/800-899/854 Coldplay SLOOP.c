#include <stdio.h>
int main(void)
{
	int t,m,s;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&m,&s);
	    if(s>m)
	    {
	        printf("0\n");
	    }
	    else
	    {
	        if((m%s)==0)
	        {
	            printf("%d\n",(m/s));
	        }
	        else
	        {
	            int cnt=0;
	            while(m>s)
	            {
	                m=m-s;
	                cnt++;
	            }
	            printf("%d\n",cnt);
	        }
	    }
	}
	return 0;
}
