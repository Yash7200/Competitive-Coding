//n --> no. of days
//k --> protin to eat each day in grams

//eat --> if he is eating continuosly in sufficient manner
//str --> storage variable

//if Chef able to eat protin in asked manner print YES
//otherwise print no with day no.

// Logic:
    // case 1: on specific day Chef gets exactly required protin
    // case 2: he buys more than required protein, so he stores it
    // case 3: he buys insufficient protein and we have stored protein enough to fulfil requirement of specific day
    // case 4: he buys insufficient protein and we don't have enough even after adding stored protein to fulfil requirement of specific day 
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,k;
	    scanf("%d %d",&n,&k);
	    int a[n],str=0,eat=1;
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&a[j]);
	        if(a[j]==k)
	        {
	            continue;
	        }
	        else if(a[j]>k)
	        {
	            str=str+a[j]-k;
	        }
	        else if(a[j]<k)
	        {
	            if( (a[j]+str) >= k)
	            {
	                str=str-(k-a[j]);
	            }
	            else if((a[j]+str<k) && eat==1)
	            {
	                printf("NO %d\n",j+1);
	                eat=0;
	            }
	            else if((a[j]+str<k) && eat==0)
	            {
	                continue;
	            }
	        }
	    }
	    if(eat==1)
	    {
	        printf("YES\n");
	    }
	}
	return 0;
}