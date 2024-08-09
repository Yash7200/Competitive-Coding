//determine no. of submission judged late

//N  --> no. of submissions
//s<i>  --> submission time
//j<i>  --> judgeding time

//if judgeding time is more than 5 mins of submission time
// then it is judged late

//st --> submission time
//jt --> judgeding time
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,cnt=0;
	    scanf("%d",&n);
	    for(int j=0;j<n;j++)
	    {
	        int st,jt;
	        scanf("%d %d",&st,&jt);
	        if( jt > (st+5) )
	        {
	            cnt++;
	        }
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}