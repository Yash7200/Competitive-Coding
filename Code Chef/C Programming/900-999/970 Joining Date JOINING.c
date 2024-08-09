//n --> no. of candidates
//on each day 5 candidate join

//k --> specific candidate left
//chef decides to shift up higher numbered candidate

//cd --> changed day
//ld --> last day

//changed --> variable to check if change is applicable or not

//we need to place candidate of last day to day when
//candidate 'k' left

//also we need to check if change is applicable or not because
//it is also possible that candidate from last day left

//to increase code readability we are using array from 1 to match with candidate no.
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,k,ld,cd;
	    scanf("%d %d",&n,&k);
	    int a[n+1];
	    a[0]=0;
	    for(int j=1;j<=n;j++)
	    {
	        if( (j%5) == 0 )
	        {
	            a[j]=j/5;
	            ld=j/5;
	        }
	        else
	        {
	            a[j]=(j/5)+1;
	            ld=(j/5)+1;
	        }
	    }
	    cd=a[k];
	    a[k]=0;
	    int changed=0;
	    for(int j=1;j<=n;j++)
	    {
	        if(a[j]==ld)
	        {
	            changed=1;
	            a[k]=a[j];
	            a[j]=0;
	            printf("%d\n",ld-cd);
	            break;
	        }
	    }
	    if(changed==0)
	    {
	        printf("0\n");
	    }
	}
	return 0;
}