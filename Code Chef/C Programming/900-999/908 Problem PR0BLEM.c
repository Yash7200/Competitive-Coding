//n --> problems of Alice
//m --> problems of Bob

//Alice solves 1 problem Bob gets **1 more problems
//Bob solves 1 problem Alice gets **3 more problems

//same --> variable to check if problems get equalized or not
#include <stdio.h>
int main(void)
{
	int t,n,m;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&n,&m);
	    if(n==m)
	    {
	        printf("YES\n");
	    }
	    else
	    {
	        int same=0;
	        for(int j=0,k=0;j<n,k<m;j++,k++)
	        {
	            if(n>m)
	            {
	                n--;
	                m++;
	                if(n==m)
	                {
	                    same=1;
	                    break;
	                }
	            }
	            else if(m>n)
	            {
	                m--;
	                n=n+3;
	                if(n==m)
	                {
	                    same=1;
	                    break;
	                }
	            }
	        }
	        if(same==1)
	        {
	            printf("YES\n");
	        }
	        else
	        {
	            printf("NO\n");
	        }
	    }
	}
	return 0;
}