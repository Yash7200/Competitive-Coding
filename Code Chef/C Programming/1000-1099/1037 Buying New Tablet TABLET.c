//Variable Usage:
    //b --> budget of chef
    //n --> no. of tablets/array size
    //w --> width of tablet
    //h --> height of tablet
    //p --> price of tablet
    //w[n] --> array of tablets' width
    //bdh[n] --> array of tablets' breadth
    //p[n] --> array of tablets' price
    //a --> maximum area of tablets

//Output Requirement:
    //area/size of tablet should be as big as possible & money should be **only less than budget

//Logic:
    //We'll receive no. of tablets (array size) & budget limit in 1st line
    //Then we'll be counting area for each input line
    //If area is bigger than previous & in a budget print area otherwise print no tablet

#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,b;
	    scanf("%d %d",&n,&b);
	    int w[n],bdh[n],p[n],a=0;
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d %d %d",&w[j],&bdh[j],&p[j]);
	        if( ((w[j]*bdh[j]) > a) && (p[j]<=b) ) 
	        {
	            a=w[j]*bdh[j];
	        }
	    }
	    if(a==0)
	    {
	        printf("no tablet\n");
	    }
	    else
	    {
	        printf("%d\n",a);
	    }
	}
	return 0;
}