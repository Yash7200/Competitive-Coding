//n --> size of array a
//find sum of second largest and largest number
#include <stdio.h>
int main()
{
    int t;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        int n,max1=0,max2=0;
        scanf("%d",&n);
        int a[n];
        for(int j=0;j<n;j++)
        {
            scanf("%d",&a[j]);
            if(a[j]>max1)
            {
                max1=a[j];
            }
        }
        for(int j=0;j<n;j++)
        {
            if( (a[j]>max2) && (a[j]!=max1) )
            {
                max2=a[j];
            }
        }
        printf("%d\n",max1+max2);
    }
    return 0;
}