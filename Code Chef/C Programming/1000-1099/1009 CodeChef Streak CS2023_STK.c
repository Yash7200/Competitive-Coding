//streak maintained if atleast 1 problem solved
//n --> no. of days in a sequence

//cnto --> streak count of Om
//cnta --> streak count of Addy

//maxb --> maximum streak of Om
//maxa --> maximum streak of Addy
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n;
	    scanf("%d",&n);
	    int o[n],a[n],cnto=0,cnta=0,maxo=0,maxa=0;
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&o[j]);
	        if(o[j]==0)
	        {
	            cnto=0;
	        }
	        else
	        {
	            cnto++;
	            if(cnto>maxo)
	            {
	                maxo=cnto;
	            }
	        }
	    }
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&a[j]);
	        if(a[j]==0)
	        {
	            cnta=0;
	        }
	        else
	        {
	            cnta++;
	            if(cnta>maxa)
	            {
	                maxa=cnta;
	            }
	        }
	    }
	    if(maxa>maxo)
	    {
	        printf("Addy\n");
	    }
	    else if(maxa<maxo)
	    {
	        printf("Om\n");
	    }
	    else
	    {
	        printf("Draw\n");
	    }
	}
	return 0;
}