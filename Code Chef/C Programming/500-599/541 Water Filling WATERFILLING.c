//3 bottles
//0 --> bottle is empty
//1 --> bottle is full

//if >=2 bottles are full then print "Not now"
//else print "Water filling time"
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int a[3],cnt1=0,cnt0=0;
	    for(int j=0;j<3;j++)
	    {
	        scanf("%d",&a[j]);
	        if(a[j]==1)
	        {
	            cnt1++;
	        }
	        else
	        {
	            cnt0++;
	        }
	    }
	    if(cnt1>=2)
	    {
	        printf("Not now\n");
	    }
	    else
	    {
	        printf("Water filling time\n");
	    }
	}
	return 0;
}